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
            let word = match[2];

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
            this._symbolCache[filePath].updateSymbols();
            console.log(filePath);
        }).bind(this));
        watcher.onDidDelete((uri => {
            let filePath = uri.fsPath;
            this._symbolCache[filePath] = undefined;
            console.log(filePath);
        }).bind(this));
        //warcher.onDidCreate(uri => { this._symbolCache[uri.fsPath] = undefined; console.log(uri.fsPath); });
        
        this._disposables.push(watcher);

    }

    dispose() {
        if (this._disposables.length > 0) {
            this._disposables.forEach(d => d.dispose());
            this._disposables = [];
        }
    }

    preloadSymbols(){
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
            let filesymbolCache = this._symbolCache[filePath]
            
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
                        if (symbolCache[filePath]){
                            let symbols = symbolCache[filePath].getSymbols();
                            results = results.concat(symbols);
                        }
                    }
                }
                symbolCache = null;
                provider = null;
                resolve(results);
            });
           
            // vscode.workspace.findFiles(provider._vjPattern).then(uris => {
            //     const execOpts = {
            //         cwd: vscode.workspace.rootPath,
            //         maxBuffer: 1024 * 1024,
            //     };
            //     let results = [];
            //     for(let uri of uris){
            //         let filePath = uri.fsPath;
            //         if (filePath !== ''){
            //             if (!provider._symbolCache[filePath]) {
            //                 provider._symbolCache[filePath] = [];
            //             }

            //             let output, lines;
            //             try {
            //                 output = child_process.execSync(`${vscode_ripgrep.rgPath} --no-messages -o --case-sensitive --line-number --column --hidden -e "${vjGlobal.symbolPattern}" ${filePath}`, execOpts);
            //                 lines = output.toString().split('\n');
            //             } catch (error) {
            //                 console.log(error.toString());
            //                 lines = [];
            //             }

            //             for (let entry of vjGlobal.searchPatterns) {
            //                 const kind = entry.kind;
            //                 const searchPattern = entry.pattern;
                           
                        
            //                 for (let line of lines) {
            //                     let lineMatch = /^(?:((?:[a-zA-Z]:)?[^:]*):)?(\d+):(\d):(.+)/.exec(line);
            //                     if (lineMatch) {
            //                         let position = new vscode.Position(parseInt(lineMatch[2]) - 1, parseInt(lineMatch[3]) - 1);
            //                         let range = new vscode.Range(position, position);
            //                         let regex = new RegExp(searchPattern);
            //                         let word = '?????';
            //                         let symbolMatch = regex.exec(lineMatch[4].toString());
            //                         if (symbolMatch) {
            //                             word = symbolMatch[2];
            //                             position = position.with({ character: symbolMatch[0].indexOf(word) });
            //                             range = new vscode.Range(position, position.translate(0, word.length));
    
            //                             if (!provider._symbolCache[filePath]) {
            //                                 //console.log('missing: ' + filePath);
            //                                 provider._symbolCache[filePath] = [];
            //                             }

            //                             // if (provider._symbolCache[filePath].filter(e => { 
            //                             //     return e.name === word
            //                             // }).length === 0){
            //                             //     provider._symbolCache[filePath].push(new vscode.SymbolInformation(word, kind, '', new vscode.Location(vscode.Uri.file(filePath), range)));
            //                             // }
                                        
            //                             if (!provider._symbolCache[filePath][word]){
            //                                 provider._symbolCache[filePath][word] = new vscode.SymbolInformation(word, kind, '', new vscode.Location(vscode.Uri.file(filePath), range));
            //                             }
            //                             results.push(provider._symbolCache[filePath][word]);

            //                         }
            //                     }
            //                 }
            //             }

            //         }
                    
            //     }

                // for (let key in provider._symbolCache) {
                //     if (provider._symbolCache[key]) {
                        
                //         for (let symbol in provider._symbolCache[key]){
                //             results.push(provider._symbolCache[key][symbol]);
                //         }
                //         //results.push(...provider._symbolCache[key]);
                //     }
                // }
                
            //});
        });
    }
}

module.exports = symbolProvider;