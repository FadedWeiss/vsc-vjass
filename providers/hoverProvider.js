const vscode = require('vscode');
const hoverhtml = require("./hoverHtml");
const vjGlobals = require("../syntaxes/vjassGlobal");
const https = require('https');
const jsdom = require('jsdom');

var awaiter = function(thisArg, _arguments, generator){
    return new Promise((resolve, reject) =>{
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new Promise(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

exports.vjdocUri = vscode.Uri.parse('vjassdoc://default');
function textToMarkedString(text){
    let markedtext = text.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&');
    return markedtext; // escape markdown syntax tokens: http://daringfireball.net/projects/markdown/syntax#backslash
};
exports.textToMarkedString = textToMarkedString;
function linkToMarkdownString(linkUrl) {
    if (linkUrl === undefined || linkUrl === '') {
        return;
    }
    let link = new vscode.MarkdownString('[VJASS documentation][1]\n\n[1]: ');
    link.appendText(linkUrl);
    link.isTrusted = true;
    return link;
}
exports.linkToMarkdownString = linkToMarkdownString;

class hoverProvider{
    constructor() {
        this._subscriptions = [];
        this._vjDocProvider = null;
        this._vjDocProvider = new VJdocumentationTextDocumentProvider();
        this._subscriptions.push(vscode.workspace.registerTextDocumentContentProvider('vjassdoc', this._vjDocProvider));
        this._subscriptions.push(vscode.commands.registerCommand('vjass.openLink', (link, newWindow) => {
            vscode.commands.executeCommand('vscode.previewHtml', exports.vjdocUri, newWindow ? vscode.ViewColumn.Two : vscode.ViewColumn.Active, "VJASS Documentation").then(() => {
                vscode.commands.executeCommand('_workbench.htmlPreview.postMessage', vscode.Uri.parse('vjassdoc://default'), {
                    line: 0
                });
            });
            this._hlslDocProvider.goto(vscode.Uri.parse(link));
        }));
    }
    getSymbols(document) {
        return vscode.commands.executeCommand('vscode.executeDocumentSymbolProvider', document.uri);
    }
    dispose() {
        this._subscriptions.forEach(s => { s.dispose(); });
    }
    provideHover(document, position, token) {
        return awaiter(this, void 0, function* () {

            let wordRange = document.getWordRangeAtPosition(position);
            if (!wordRange) {
                return null;
            }
            let name = document.getText(wordRange);
            let backchar = '';
            if (wordRange.start.character > 0) {
                let backidx = wordRange.start.translate({ characterDelta: -1 });
                backchar = backidx.character < 0 ? '' : document.getText(new vscode.Range(backidx, wordRange.start));
            }
      
            var entry = vjGlobals.cjfunctions[name];
            if (entry && (entry.description || entry.completion) ) {
                let signature = '(*CJfunction*) ';
                signature += '**' + name + '**';
                signature += '(';
                if (entry.parameters && entry.parameters.length != 0) {
                    let params = '';
                    entry.parameters.forEach(p => params += p.label + ',');
                    signature += params.slice(0, -1);
                }
                signature += ')';
                let contents = [];
                contents.push(new vscode.MarkdownString(signature));
                contents.push(textToMarkedString(entry.completion));
                contents.push(textToMarkedString(entry.description));
                contents.push(linkToMarkdownString(entry.link));
                return new vscode.Hover(contents, wordRange);
            }
            var entry = vjGlobals.bjfunctions[name];
            if (entry && (entry.description || entry.completion) ) {
                let signature = '(*BJfunction*) ';
                signature += '**' + name + '**';
                signature += '(';
                if (entry.parameters && entry.parameters.length != 0) {
                    let params = '';
                    entry.parameters.forEach(p => params += p.label + ',');
                    signature += params.slice(0, -1);
                }
                signature += ')';
                let contents = [];
                contents.push(new vscode.MarkdownString(signature));
                contents.push(textToMarkedString(entry.completion));
                contents.push(textToMarkedString(entry.description));
                contents.push(linkToMarkdownString(entry.link));
                return new vscode.Hover(contents, wordRange);
            }
            entry = vjGlobals.constants[name];
            if (entry && entry.description) {
                let signature = '(*constants*) ';
                signature += '**' + name + '**';
                let contents = [];
                contents.push(new vscode.MarkdownString(signature));
                contents.push(textToMarkedString(entry.description));
                contents.push(linkToMarkdownString(entry.link));
                return new vscode.Hover(contents, wordRange);
            }
           
            //let symbols = yield this.getSymbols(document);
            this.getSymbols(document).then(symbols => {
                for (let s of symbols) {
                    if (s.name === name) {
                        let contents = [];
                        let signature = '(*' + vscode.SymbolKind[s.kind].toLowerCase() + '*) ';
                        signature += s.containerName ? s.containerName + '.' : '';
                        signature += '**' + name + '**';
                        contents.push(new vscode.MarkdownString(signature));
                        if (s.location.uri.toString() === document.uri.toString()) {
                            //contents = [];
                            contents.push({ language: 'vjass', value: document.getText(s.location.range) });
                        }
                        return new vscode.Hover(contents, wordRange);
                    }
                }});
        });
    }
}

module.exports = hoverProvider;

class VJdocumentationTextDocumentProvider {
    constructor() {
        this._uri = null;
        this._onDidChange = new vscode.EventEmitter();
    }
    goto(uri) {
        this._uri = uri;
        this._onDidChange.fire(exports.hlsldocUri);
    }
    get onDidChange() {
        return this._onDidChange.event;
    }
    provideTextDocumentContent(uri) {
        uri = this._uri;
        return new Promise((resolve, reject) => {
            let request = https.request({
                host: uri.authority,
                path: uri.path,
                rejectUnauthorized: vscode.workspace.getConfiguration().get("http.proxyStrictSSL", true)
            }, (response) => {
                if (response.statusCode == 301 || response.statusCode == 302)
                    return resolve(response.headers.location);
                if (response.statusCode != 200)
                    return resolve(response.statusCode.toString());
                let html = '';
                response.on('data', (data) => { html += data.toString(); });
                response.on('end', () => {
                    const dom = new jsdom.JSDOM(html);
                    let topic = '';
                    let node = dom.window.document.querySelector('.topic');
                    if (node) {
                        let num = node.getElementsByTagName('a').length;
                        for (let i = 0; i < num; ++i) {
                            if (node.getElementsByTagName('a')[i].href.startsWith('http')) {
                                node.getElementsByTagName('a')[i].href = encodeURI('command:shader.openLink?' + JSON.stringify([node.getElementsByTagName('a')[i].href, false]));
                            }
                        }
                        topic = node.outerHTML;
                    }
                    else {
                        let link = uri.with({ scheme: 'https' }).toString();
                        topic = `<a href="${link}">No topic found, click to follow link</a>`;
                    }
                    resolve(hoverhtml.HTML_TEMPLATE.replace('{0}', topic));
                });
                response.on('error', (error) => { console.log(error); });
            });
            request.on('error', (error) => { console.log(error); });
            request.end();
        });
    }
}
