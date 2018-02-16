const vscode = require('vscode');
const vscode_ripgrep = require('vscode-ripgrep');
const child_process = require("child_process");
const path = require("path");
const vjGlobal = require('../syntaxes/vjassGlobal');
const searchPatterns = [
    { kind: vscode.SymbolKind.Function, pattern: /\b(function)\s+([a-zA-Z_][a-zA-Z0-9_]*)\s+takes\s+/.source },
    { kind: vscode.SymbolKind.Method, pattern: /\b(method)\s+([a-zA-Z_][a-zA-Z0-9_]*)\s+takes\s+/.source },
    { kind: vscode.SymbolKind.Struct, pattern: /\b(struct)\s+([a-zA-Z_][a-zA-Z0-9_]*)/.source },
    { kind: vscode.SymbolKind.Module, pattern: /\b(library)\s+([a-zA-Z_][a-zA-Z0-9_]*)/.source },
    { kind: vscode.SymbolKind.Variable, pattern: /^(?:hashtable|integer|real|boolean|string|handle|agent|event|player|widget|unit|destructable|item|ability|buff|force|group|trigger|triggercondition|triggeraction|timer|location|region|rect|boolexpr|sound|conditionfunc|filterfunc|unitpool|itempool|race|alliancetype|racepreference|gamestate|igamestate|fgamestate|playerstate|playerscore|playergameresult|unitstate|aidifficulty|eventid|gameevent|playerevent|playerunitevent|unitevent|limitop|widgetevent|dialogevent|unittype|gamespeed|gamedifficulty|gametype|mapflag|mapvisibility|mapsetting|mapdensity|mapcontrol|playerslotstate|volumegroup|camerafield|camerasetup|playercolor|placement|startlocprio|raritycontrol|blendmode|texmapflags|effect|effecttype|weathereffect|terraindeformation|fogstate|fogmodifier|dialog|button|quest|questitem|defeatcondition|timerdialog|leaderboard|multiboard|multiboarditem|trackable|gamecache|version|itemtype|texttag|attacktype|damagetype|weapontype|soundtype|lightning|pathingtype|image|ubersplat)\s+([a-zA-Z_\x7f-\xff][a-zA-Z0-9:_\x7f-\xff]*)/.source},
];

class symbolProvider {
    constructor(){
        this._disposables = [];
        this._vjPattern = ['.j','.jass', '.ai'];
        // const extension = vscode.extensions.getExtension('vscode.vjass');
        // if (extention && extention.packageJSON
        //     && extention.packageJSON.contributes
        //     && extention.packageJSON.contributes.languages) {
        //     let vjlang = extention.packageJSON.contributes.languages.filter(l => l.id === 'vjass');
        //     if (vjlang.length && vjlang[0].extensions) {
        //         this._vjPattern = vjlang[0].extensions;
        //     }
        // }
    }

    dispose() {
        if (this._disposables.length > 0) {
            this._disposables.forEach(d => d.dispose());
            this._disposables = [];
        }
    }

    getDocumentSymbols(uri) {
        return new Promise((resolve, reject) => {
            let result = [];
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

                    let lastChar = kind === vscode.SymbolKind.Function ? "endfunction" :
                        kind === vscode.SymbolKind.Method ? 'endmethod' :
                            kind === vscode.SymbolKind.Struct ? 'endstruct' :
                                kind === vscode.SymbolKind.Module ? 'endlibrary' :
                                    '';

                    if (lastChar) {
                        let end = text.indexOf(lastChar, match.index) + 1;
                        range = new vscode.Range(range.start, document.positionAt(end));
                    }

                    result.push(new vscode.SymbolInformation(word, kind, '', new vscode.Location(document.uri, range)));
                }
            }
            for (let entry of vjGlobal.searchPatterns) {
                fetchSymbol(entry);
            }
            resolve(result);
        });
    }

    provideDocumentSymbols(document, token) {
        return this.getDocumentSymbols(document.uri);
    }
    provideWorkspaceSymbols(query, token) {
        return new Promise((resolve, reject) => {
            const execOpts = {
                cwd: vscode.workspace.rootPath,
                maxBuffer: 1024 * 1024
            };
            let results = [];
            let includePattern = '-g *' + this._vjPattern.join(' -g *');
            for (let entry of vjGlobal.searchPatterns) {
                const kind = entry.kind;
                const searchPattern = entry.pattern;
                let output = child_process.execSync(`${vscode_ripgrep.rgPath} ${includePattern} -o --case-sensitive -H --line-number --column --hidden -e "${searchPattern}" .`, execOpts);
                let lines = output.toString().split('\n');
                for (let line of lines) {
                    let lineMatch = /^(?:((?:[a-zA-Z]:)?[^:]*):)?(\d+):(\d):(.+)/.exec(line);
                    if (lineMatch) {
                        let position = new vscode.Position(parseInt(lineMatch[2]) - 1, parseInt(lineMatch[3]) - 1);
                        let range = new vscode.Range(position, position);
                        let filepath = path.join(vscode.workspace.rootPath, lineMatch[1]);
                        let regex = new RegExp(searchPattern);
                        let word = '?????';
                        let symbolMatch = regex.exec(lineMatch[4].toString());
                        if (symbolMatch) {
                            word = symbolMatch[1];
                            position = position.with({ character: symbolMatch[0].indexOf(word) });
                            range = new vscode.Range(position, position.translate(0, word.length));
                        }
                        results.push(new vscode.SymbolInformation(word, kind, '', new vscode.Location(vscode.Uri.file(filepath), range)));
                    }
                }
            }
            resolve(results);
        });
    }
}

module.exports = symbolProvider;