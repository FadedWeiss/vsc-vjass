const vscode = require('vscode');
const vjGlobal = require('../syntaxes/vjassGlobal');

class fileSymbolCache {
    constructor(filePath) {
        this.symbols;
        this.changed = true;
        this.filePath = filePath || '';
        this.updateSymbols();
    }

    initSymbols(){
        this.symbols = {
            "functions": {},
            "structs": {},
            "methods": {},
            "interfaces": {},
            "modules": {},
            "variables": {},
        };
    }

    symbolKindToSymbolSetKey(kind){
        switch(kind){
            case vscode.SymbolKind.Function:
                return "functions";
            case vscode.SymbolKind.Struct:
                return "structs";
            case vscode.SymbolKind.Method:
                return "methods";
            case vscode.SymbolKind.Interface:
                return "interfaces";
            case vscode.SymbolKind.Module:
                return "modules";
            case vscode.SymbolKind.Variable:
                return "variables";
            default:
                return "";
        }
    }
    updateLines(lines){
        for (let line of lines) {
            let lineMatch = /^(?:((?:[a-zA-Z]:)?[^:]*):)?(\d+):(\d+):(.+)/.exec(line);
            if (lineMatch) {
                let linepos = new vscode.Position(parseInt(lineMatch[2]) - 1, parseInt(lineMatch[3]) - 1);
                let word = '?????';

                //下面的待会抽成一个函数
                for (let entry of vjGlobal.searchPatterns) {
                    const kind = entry.kind;
                    const pattern = entry.pattern;
                    let symbolMatch = this.matchSymbol(lineMatch[4].toString(), pattern);
                    if(symbolMatch){
                        word = symbolMatch[2];
                        let wordpos = linepos.with({ character: symbolMatch[0].indexOf(word) });
                        let range = new vscode.Range(wordpos, wordpos.translate(0, word.length));
                        let kindkey = this.symbolKindToSymbolSetKey(kind);
                        let symbolSet = this.symbols[kindkey];
                        //if(!symbolSet.hasOwnProperty(word)){
                            let symbol = new vscode.SymbolInformation(word, kind, '', new vscode.Location(vscode.Uri.file(this.filePath), range));
                            symbolSet[word] = symbol;
                        //}
                        break;
                    }                        
                }
            }
        }
    }

    updateSymbols(){
        if (this.filePath !== ''){
            let lines = vjGlobal.processLines(vjGlobal.symbolPattern, this.filePath);

            if(lines.length > 0 && this.changed){
                this.initSymbols();
                this.updateLines(lines);
                this.changed = false;
            }               
        } 
    }

    matchSymbol(data, regPattern) {
        let regex = new RegExp(regPattern);
        return regex.exec(data);
    }

    getSymbols(){
        let results = [];
        for(let idx in this.symbols){
            let symbolSet = this.symbols[idx];
            for(let key in symbolSet){
                let symbol = symbolSet[key];
                results.push(symbol);
            }
        }
        return results;
    }
}

module.exports = fileSymbolCache;