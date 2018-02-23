
const vscode = require('vscode');

var awaiter = function(thisArg, _arguments, generator){
    return new Promise((resolve, reject) =>{
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new Promise(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class referenceProvider {

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
            vscode.commands.executeCommand('vscode.executeWorkspaceSymbolProvider', name).then (symbols => {
                symbols.filter(s => 
                    (s.name === name && s.location.uri.toString() != document.uri.toString())).forEach(symbol => {
                    results.push(symbol.location);
                });
                resolve(results);
            });
           
        }));
    }
}

module.exports = referenceProvider;