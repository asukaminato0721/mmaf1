module.exports = {
    map: new Map(Object.entries(
        {
            '=': "Set",
            "==": "Equal",
            "_": "Blank",
            "__": "BlankSequence",
            "___": "BlankNullSequence",
            "^:=": "UpSetDelayed",
            "//": "Postfix",
            "/;": "Condition",
            "+": 'Plus',
            '++': "Increment",
            // waiting for PR :)
        }
    ))
}
