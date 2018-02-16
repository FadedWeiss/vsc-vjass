const vscode = require('vscode');
const vjGlobals = require("../syntaxes/vjassGlobal");

var awaiter = function(thisArg, _arguments, generator){
    return new Promise((resolve, reject) =>{
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new Promise(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class completionProvider{

    constructor(){
        this.triggerCharacters = ['.'];
    }
    

    provideCompletionItems(document, position, token) {
        return new Promise((resolve, reject) => awaiter(this, void 0, function* () {
            let result = [];
            let range = document.getWordRangeAtPosition(position);
            let prefix = range ? document.getText(range) : '';
            if(!range){
                range = new vscode.Range(position, position);
            }
            var added = {};

            var createNewProposal = function(kind, name, entry, type) {
                var proposal = new vscode.CompletionItem(name);
                proposal.kind = kind;
                if (entry) {
                    if (entry.description) {
                        proposal.documentation = entry.description;
                    }
                    if (entry.parameters) {
                        let signature = type ? '(' + type + ') ' : '';
                        signature += name;
                        signature += '(';
                        if (entry.parameters && entry.parameters.length != 0) {
                            let params = '';
                            entry.parameters.forEach(p => params += p.label + ',');
                            signature += params.slice(0, -1);
                        }
                        signature += ')';
                        proposal.detail = signature;
                    }
                }
                return proposal;
            };
            var matches = (name) => {
                return prefix.length === 0 || name.length >= prefix.length && name.substr(0, prefix.length) === prefix;
            };

            for (var name in vjGlobals.cjfunctions){
                if(vjGlobals.cjfunctions.hasOwnProperty(name) && matches(name))
                    added[name] = true;
                    result.push(createNewProposal(vscode.CompletionItemKind.Function, name, vjGlobals.cjfunctions[name], 'CJfunction'));
            }

            for (var name in vjGlobals.bjfunctions){
                if(vjGlobals.bjfunctions.hasOwnProperty(name) && matches(name))
                    added[name] = true;
                    result.push(createNewProposal(vscode.CompletionItemKind.Function, name, vjGlobals.bjfunctions[name], 'BJfunction'));
            }

            for (var name in vjGlobals.constants){
                if(vjGlobals.constants.hasOwnProperty(name) && matches(name))
                    added[name] = true;
                    result.push(createNewProposal(vscode.CompletionItemKind.constants, name, vjGlobals.constants[name], 'constants'));
            }

            vscode.commands.executeCommand('vscode.executeDocumentSymbolProvider', document.uri).then (symbols => {
                symbols.forEach(symbol => {

                    if (!added[symbol.name]) {
                        added[symbol.name] = true;
                        result.push(createNewProposal(symbol.kind, symbol.name, null));
                    }
                });

                resolve(result);
            });

        }));

        
        // var text = document.getText();
  
        // var match = null;
        // while (match = functionMatch.exec(text)) {
        //     var word = match[1];
        //     if (!added[word]) {
        //         added[word] = true;
        //         result.push(createNewProposal(vscode.CompletionItemKind.Function, word, null));
        //     }
        // }

        // return Promise.resolve(result);
    }
}

module.exports = completionProvider;