# MmaF1

A deadly simple plugin to f1 in your vscode. PoC.

## Prerequirement

Download the Mathematica documents. Set the path to `mmaf1.path`

## Usage

1. hightlight the function.
2. <kbd>F1</kbd>

## TODO

- [ ] query word at cursor directly
- [ ] query for symbols `=` `:=` `==` `===` `:^=` `_` `__` `___` `..` `...` `|->` ...
- [ ] Integrate into other extensions

## Why js

To keep it small, since I enabled the `"checkJs": true` in jsconfig.json

## Installation

Yes, no `node_modules`😉

```
vsce package
```

then install the vsix.
