# MmaF1

A deadly simple plugin to f1 in your vscode. PoC.

## Prerequirement

Download the Mathematica documents. Set the path to `mmaf1.path`

Set the mathematica binary/wolframplayer binary to `mmaf1.bin`

## Usage

1. hightlight/put cursor at the function.
2. <kbd>F1</kbd>

## TODO

- [ ] Integrate into other extensions

## Features

- partly support symbols. try query `//` (Need more PR).
- familiar <kbd>F1</kbd>
- query by highlight or put cursor on function name.

## Why js

To keep it small, since I enabled the `"checkJs": true` in jsconfig.json

## Installation

Yes, no `node_modules`😉

```
vsce package
```

then install the vsix. Or you can download the .vsix from release.

## Development

Edit the source code, press <kbd>F5</kbd> to preview and test.

