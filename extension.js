// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const hoverProvider = require('./providers/hoverProvider');
const completionProvider = require('./providers/completionProvider');
const referenceProvider = require('./providers/referenceProvider');
const symbolProvider = require('./providers/symbolProvider');
const definitionProvider = require('./providers/definitionProvider');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "vjass" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json

    context.subscriptions.push(vscode.languages.registerHoverProvider('vjass', new hoverProvider()));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider('vjass', new completionProvider(), '\(', ',', '.'));
    let sp = new symbolProvider();
    context.subscriptions.push(vscode.languages.registerDocumentSymbolProvider('vjass', sp));
    context.subscriptions.push(vscode.languages.registerWorkspaceSymbolProvider(sp));
    context.subscriptions.push(vscode.languages.registerReferenceProvider('vjass', new referenceProvider()));
    context.subscriptions.push(vscode.languages.registerDefinitionProvider('vjass', new definitionProvider()));

}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;