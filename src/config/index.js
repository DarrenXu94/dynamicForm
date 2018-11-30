const jsonPattern = {
    title: "Create user",
    model: [
        {key:"Name", type:"text"},
        {key:"Age", type:"text"},
        {key:"Description", type:"textarea", textarea: {rows: 4, cols: 50}}

    ]
}

module.exports.jsonPattern = jsonPattern