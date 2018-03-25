const vscode = require('vscode');
const vjGlobal = require('../syntaxes/vjassGlobal');
const fileSymbolCache = require('./fileSymbolCache');

var fetchDocumentSymbols = function(document){
    var results = [];
    var text = document.getText();
    function fetchSymbol(entry) {
        const kind = entry.kind;
        const pattern = entry.pattern;
        let regex = new RegExp(pattern, "gm");
        let match = null;
        while (match = regex.exec(text)) {
            let line = document.positionAt(match.index).line;
            let range = document.lineAt(line).range;
            let word = match[match.length - 1];

            let lastChar = (kind === vscode.SymbolKind.Function || kind === vscode.SymbolKind.Interface) ? "endfunction" :
                kind === vscode.SymbolKind.Method ? 'endmethod' :
                    kind === vscode.SymbolKind.Struct ? 'endstruct' :
                        kind === vscode.SymbolKind.Module ? 'endlibrary' :
                            '';

            if (lastChar) {
                let end = text.indexOf(lastChar, match.index) + 1;
                range = new vscode.Range(range.start, document.positionAt(end));
            }

            results.push(new vscode.SymbolInformation(word, kind, '', new vscode.Location(document.uri, range)));
        }
    }
    for (let entry of vjGlobal.searchPatterns) {
        fetchSymbol(entry);
    }
    return results;
};

class symbolProvider {
    constructor(){
        this._disposables = [];
        this._symbolCache = {};

        this.preloadSymbols();
        // watch files to invalidate cache, if needed
        let watcher = vscode.workspace.createFileSystemWatcher(new vscode.RelativePattern(vscode.workspace.rootPath, vjGlobal.filePattern), true);
        
        watcher.onDidChange((uri => {
            let filePath = uri.fsPath;
            this._symbolCache[filePath].changed = true;
            //this._symbolCache[filePath].updateSymbols();
            //console.log(filePath);
        }).bind(this));
        watcher.onDidDelete((uri => {
            let filePath = uri.fsPath;
            this._symbolCache[filePath] = undefined;
            //console.log(filePath);
        }).bind(this));
        
        this._disposables.push(watcher);
    }

    dispose() {
        if (this._disposables.length > 0) {
            this._disposables.forEach(d => d.dispose());
            this._disposables = [];
        }
    }

    preloadSymbols(){
        console.log("preload");
        vscode.window.showInformationMessage('[VJASS] Building Cache.');
        var symbolCache = this._symbolCache;
        vscode.workspace.findFiles(vjGlobal.filePattern).then(uris => {
            for(let uri of uris){
                let filePath = uri.fsPath;
                if (filePath !== ''){
                    if (!symbolCache[filePath]) {
                        let cache = new fileSymbolCache(filePath);
                        symbolCache[filePath] = cache;
                        //console.log(cache.symbols.toString());
                    }else{
                        symbolCache[filePath].updateSymbols();
                    }
                }
            }
        });
    }

    getDocumentSymbols(uri) {
        var provider = this;
        return new Promise((resolve, reject) => {
            
            let document = null;
            for (let d of vscode.workspace.textDocuments) {
                if (d.uri.toString() === uri.toString()) {
                    document = d;
                    break;
                }
            }
            if (document === null) {
                resolve([]);
                return;
            }

            //已经缓存了当前document的symbos则直接resolve
            let filePath = document.uri.fsPath;
            let filesymbolCache = provider._symbolCache[filePath]
            
            if(filesymbolCache && !filesymbolCache.changed){
                resolve(filesymbolCache.getSymbols());
            }
                
            resolve(fetchDocumentSymbols(document));
        });
    }

    provideDocumentSymbols(document, token) {
        return this.getDocumentSymbols(document.uri);
    }
    provideWorkspaceSymbols(query, token) {       
        var provider = this;
        return new Promise((resolve, reject) => {
            var results = [];
            var symbolCache = provider._symbolCache;
            vscode.workspace.findFiles(vjGlobal.filePattern).then(uris => {
                for(let uri of uris){
                    let filePath = uri.fsPath;
                    if (filePath !== ''){
                        if (!symbolCache[filePath]){
                            symbolCache[filePath] = new fileSymbolCache(filePath);
                        }else if (symbolCache[filePath].changed){
                            symbolCache[filePath].updateSymbols();
                        }//else{
                            let symbols = symbolCache[filePath].getSymbols(query);
                            results = results.concat(symbols);
                        //}
                    }
                }
                symbolCache = null;
                provider = null;
                resolve(results);
            });
        });
    }
}

module.exports = symbolProvider;