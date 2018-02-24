const vscode = require('vscode');
const vscode_ripgrep = require('vscode-ripgrep');
const child_process = require("child_process");
const path = require("path");
const vjGlobal = require('../syntaxes/vjassGlobal');

var fetchDocumentSymbols = function(document){
    var results = [];
    let text = document.getText();
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
        this._vjPattern = '{**/*.j,**/*.jass,**/*.ai}';
        this._symbolCache = {};
        // const extension = vscode.extensions.getExtension('vscode.vjass');
        // if (extention && extention.packageJSON
        //     && extention.packageJSON.contributes
        //     && extention.packageJSON.contributes.languages) {
        //     let vjlang = extention.packageJSON.contributes.languages.filter(l => l.id === 'vjass');
        //     if (vjlang.length && vjlang[0].extensions) {
        //         this._vjPattern = vjlang[0].extensions;
        //     }
        // }

        // watch files to invalidate cache, if needed
        let watcher = vscode.workspace.createFileSystemWatcher(new vscode.RelativePattern(vscode.workspace.rootPath, this._vjPattern), true);
        watcher.onDidChange(uri => { this._symbolCache[uri.fsPath] = undefined; console.log(uri.fsPath); });
        watcher.onDidDelete(uri => { this._symbolCache[uri.fsPath] = undefined; console.log(uri.fsPath); });
        this._disposables.push(watcher);

    }

    dispose() {
        if (this._disposables.length > 0) {
            this._disposables.forEach(d => d.dispose());
            this._disposables = [];
        }
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
           
            resolve(fetchDocumentSymbols(document));
        });
    }

    provideDocumentSymbols(document, token) {
        return this.getDocumentSymbols(document.uri);
    }
    provideWorkspaceSymbols(query, token) {        

        var provider = this;
        return new Promise((resolve, reject) => {
            vscode.workspace.findFiles(provider._vjPattern).then(uris => {
                const execOpts = {
                    cwd: vscode.workspace.rootPath,
                    maxBuffer: 1024 * 1024,
                };

                for(let uri of uris){
                    let filePath = uri.fsPath;
                    if (filePath !== ''){
                        if (!provider._symbolCache[filePath]) {
                            provider._symbolCache[filePath] = [];
                        }

                        for (let entry of vjGlobal.searchPatterns) {
                            const kind = entry.kind;
                            const searchPattern = entry.pattern;
                            let output, lines;
                            try {
                                output = child_process.execSync(`${vscode_ripgrep.rgPath} -o --case-sensitive --line-number --column --hidden -e "${searchPattern}" ${filePath}`, execOpts);
                                lines = output.toString().split('\n');
                            } catch (error) {
                                console.log(error.toString());
                                lines = [];
                            }
                        
                            for (let line of lines) {
                                let lineMatch = /^(?:((?:[a-zA-Z]:)?[^:]*):)?(\d+):(\d):(.+)/.exec(line);
                                if (lineMatch) {
                                    let position = new vscode.Position(parseInt(lineMatch[2]) - 1, parseInt(lineMatch[3]) - 1);
                                    let range = new vscode.Range(position, position);
                                    let regex = new RegExp(searchPattern);
                                    let word = '?????';
                                    let symbolMatch = regex.exec(lineMatch[4].toString());
                                    if (symbolMatch) {
                                        word = symbolMatch[2];
                                        position = position.with({ character: symbolMatch[0].indexOf(word) });
                                        range = new vscode.Range(position, position.translate(0, word.length));
    
                                        if (!provider._symbolCache[filePath]) {
                                            console.log('missing: ' + filePath);
                                            provider._symbolCache[filePath] = [];
                                        }

                                        // if (provider._symbolCache[filePath].filter(e => { 
                                        //     return e.name === word
                                        // }).length === 0){
                                        //     provider._symbolCache[filePath].push(new vscode.SymbolInformation(word, kind, '', new vscode.Location(vscode.Uri.file(filePath), range)));
                                        // }
                                        
                                        if (!provider._symbolCache[filePath][word]){
                                            provider._symbolCache[filePath][word] = new vscode.SymbolInformation(word, kind, '', new vscode.Location(vscode.Uri.file(filePath), range));
                                        }

                                    }
                                }
                            }
                        }

                    }
                    
                }


                let results = [];
                for (let key in provider._symbolCache) {
                    if (provider._symbolCache[key]) {
                        
                        for (let symbol in provider._symbolCache[key]){
                            results.push(provider._symbolCache[key][symbol]);
                        }
                        //results.push(...provider._symbolCache[key]);
                    }
                }
                provider = null;
                resolve(results);
            });
        });
    }
}

module.exports = symbolProvider;