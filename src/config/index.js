const jsonPattern = {
    title: "Create user",
    model: [
        {key:"Name", type:"text"},
        {key:"Age", type:"text"},
        {key:"Description", type:"textarea", textarea: {rows: 4, cols: 50}},
        {key:"Country", type:"dropdown", select: {default: 'australia', options:[
            {value: 'australia', text: 'Australia'},
            {value: 'england', text: 'England'},
            {value: 'canada', text: 'Canada'}

        ]}}


    ]
}

module.exports.jsonPattern = jsonPattern