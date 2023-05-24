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
			'^': 'Power',
			'/.': 'Replace',
			'//.': 'ReplaceAll',
			'/:': ['TagSet', 'TagSetDelayed'],
			'=.': 'Unset',
			'+=': 'AddTo',
			'-=': 'SubtractFrom',
			'*=': 'TimesBy',
			'/=': 'DivideBy',
			'..': 'Repeated',
			'...': 'RepeatedNull',
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
			'[[': 'Part',
			']]': 'Part',
			'#': 'Slot',
			'##': 'SlotSequence',
			'%': 'Out',
			'%%': 'Out',
			'%%%': 'Out', // make 3 is enough for the case.
			// waiting for PR :)
		}
	).map(
		([k, v]) => [k, Array.isArray(v) ? v : [v]]
	)
	)
}
