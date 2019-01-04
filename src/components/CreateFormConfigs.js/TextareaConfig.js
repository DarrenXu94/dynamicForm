import Config from '../Config'

const textareaConfig = {
    title: 'Textarea config',
    model: [
        {key:"text", type:"text"},
        {key:"rows", type:"text"},
        {key:"cols", type:"text"}
    ]
}

const config = new Config(textareaConfig.title, textareaConfig.model)

export default config