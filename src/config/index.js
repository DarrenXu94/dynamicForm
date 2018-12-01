import Config from '../components/Config'

const jsonPattern = {
    title: "Create user",
    model: [
        {key:"Name", type:"text", text: "Add a name"},
        {key:"Age", type:"text"},
        {key:"Description", type:"textarea",text: "Add a description", textarea: {rows: 4, cols: 50}},
        {key:"Country", type:"dropdown", select: {default: 'australia', options:[
            {value: 'australia', text: 'Australia'},
            {value: 'england', text: 'England'},
            {value: 'canada', text: 'Canada'}
        ]}},
        {key:"React", type:"checkbox", text:"Understands React"}
    ]
}

let config = new Config(jsonPattern.title, jsonPattern.model)

export default config