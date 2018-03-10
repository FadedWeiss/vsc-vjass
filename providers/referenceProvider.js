
const vscode = require('vscode');
const vjGlobal = require('../syntaxes/vjassGlobal');

var awaiter = function(thisArg, _arguments, generator){
    return new Promise((resolve, reject) =>{
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new Promise(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class referenceProvider {

    promiseReferences(document, word){
        return new Promise((resolve, reject) =>{
            let results = [];
            vscode.workspace.findFiles(vjGlobal.filePattern).then(uris => {
                for(let uri of uris){
                    let filePath = uri.fsPath;
                    if (filePath !== '' && document.uri.toString() !== uri.toString()){
                        let lines = vjGlobal.processLines(`\\b${word}\\b`, filePath);
                        
                        //wrong
                        for (let line of lines) {
                            if ( line !== '' ){
                                let info = line.split(':');
                                let wordpos = new vscode.Position(parseInt(info[0]) - 1, parseInt(info[1]) - 1);
                                results.push(new vscode.Location(uri, wordpos));
                            }
                        }
                        
                      
                        //results = results.concat(lines);
                    }
                }
                resolve(results);
            });
        });
    }

    provideReferences(document, position, options, token) {

        let wordRange = document.getWordRangeAtPosition(position);
        if (!wordRange) {
            return null;
        }
        let name = document.getText(wordRange);
        return new Promise((resolve, reject) => awaiter(this, void 0, function* () {
            let results = [];
            const text = document.getText();
            const regex = new RegExp(`\\b${name}\\b`, 'gm');
            let match = null;
            while (match = regex.exec(text)) {
                let refPosition = document.positionAt(match.index);
                results.push(new vscode.Location(document.uri, document.getWordRangeAtPosition(refPosition)));
            }
            
            //vscode.commands.executeCommand('vscode.executeDocumentSymbolProvider', document.uri)
            this.promiseReferences(document, name).then( references => {
                results = results.concat(references);
                resolve(results);
            })

            // vscode.commands.executeCommand('vscode.executeWorkspaceSymbolProvider', name).then (symbols => {
            //     symbols.filter(s => 
            //         (s.name === name && s.location.uri.toString() != document.uri.toString())).forEach(symbol => {
            //         results.push(symbol.location);
            //     });
            //     resolve(results);
            // });
           
        }));
    }
}

module.exports = referenceProvider;