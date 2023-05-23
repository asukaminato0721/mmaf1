module.exports = {
	map: new Map(Object.entries(
		{
			'=': "Set",
			"==": "Equal",
			':=': 'SetDelayed',
			'^=': 'UpSet',
			"_": "Blank",
			"__": "BlankSequence",
			"___": "BlankNullSequence",
			"^:=": "UpSetDelayed",
			"//": "Postfix",
			"/;": "Condition",
			"+": 'Plus',
			'++': ['Increment', 'PreIncrement'],
			'-': ['Minus', 'Subtract'],
			'*': 'Multiply',
			'/': 'Divide',
			'/.': 'Replace',
			'//.': 'ReplaceAll',
			'/:': ['TagSet', 'TagSetDelayed'],
			'=.': 'Unset',
			'+=': 'AddTo',
			'-=': 'SubtractFrom',
			'*=': 'TimesBy',
			'/=': 'DivideBy',
			'..': 'Repeated',
			'...': 'ReplacedNull',
			'->': 'Rule',
			'|->': 'Function',
			':>': 'RuleDelayed',
			'<->': 'TwoWayRule',
			'@': 'Prefix',
			'@@': 'Apply',
			'@@@': 'Apply',
			'/@': 'Map',
			'//@': 'MapAll',
			'~': 'Infix',
			'@*': 'Composition',
			'/*': 'RightComposition',
			'>': 'Greater',
			'<': 'Less',
			'>=': 'GreaterEqual',
			'<=': 'LessEqual',
			'!=': 'Unequal',
			'===': 'SameQ',
			'=!=': 'UnsameQ',
			'!': 'Not',
			'||': 'Or',
			'&&': 'And',
			'|': 'Alternatives',
			'&': 'Function',
			'<>': 'StringJoin',
			'~~': 'StringExpression',
			';;': 'Span',
			';': 'CompoundExpression',
			'?': 'Information',
			'??': 'Information',
			'<<': 'Get',
			'>>': 'Put',
			'>>>': 'PutAppend',
			'\'': 'Derivative',
			'**': 'NonCommutativeMultiply',
			'.': 'Dot',
			'--': ['Decremant', 'PreDrement'],
			// waiting for PR :)
		}
	))
}
