import Config from '../Config'

const checkboxConfig = {
    title: 'Checkbox text',
    model: [
        {key:"text", type:"text"}
    ]
}

const config = new Config(checkboxConfig.title, checkboxConfig.model)

export default config