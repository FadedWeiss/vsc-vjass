const vscode = require('vscode');
//const vjGlobals = require("../syntaxes/vjassGlobal.j");

class definitionProvider{

    getDefinitionLocations(document, position){
        return new Promise((resolve, reject) =>{
            let wordRange = document.getWordRangeAtPosition(position);
            if(!wordRange){
                reject();
            }
            let name = document.getText(wordRange);

            //vscode.commands.executeCommand('vscode.executeDocumentSymbolProvider', document.uri)
            vscode.commands.executeCommand('vscode.executeWorkspaceSymbolProvider', name).then(symbols => {
                let result = [];
                for (let symbol of symbols) {
                    if (symbol.name === name){
                        result.push(symbol.location);
                    }
                }
                resolve(result);
            }, reson => reject(reason));
        });
    }

    provideDefinition(document, position, token) {
        return this.getDefinitionLocations(document, position);
    }
    provideImplementation(document, position, token) {
        return this.getDefinitionLocations(document, position);
    }
    provideTypeDefinition(document, position, token) {
        return this.getDefinitionLocations(document, position);
    }
}

module.exports = definitionProvider;