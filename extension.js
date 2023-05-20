// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const cp = require("child_process")
const { query } = require("./walkdir")
const { map } = require("./symbols2letter")
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let disposable = vscode.commands.registerCommand('mmaf1.helloWorld', function () {
		const highlighted = (function () {
			const editor = vscode.window.activeTextEditor;
			const selection = editor.selection;
			return editor.document.getText(
				(selection && !selection.isEmpty)
					? new vscode.Range(selection.start.line, selection.start.character, selection.end.line, selection.end.character)
					: editor.document.getWordRangeAtPosition(editor.selection.active)
			)
		})();
		for (const f of query(vscode.workspace.getConfiguration().get('mmaf1.path'), map.get(highlighted) || highlighted)) {
			cp.spawn(vscode.workspace.getConfiguration().get('mmaf1.bin'), [f]);
		}
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
