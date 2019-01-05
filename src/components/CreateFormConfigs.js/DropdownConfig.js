import Config from '../Config'

const dropdownConfig = {
    title: 'Dropdown inputs, separate with a comma',
    model: [
        {key:"dropdownConfig", type:"text"}
    ]
}

const config = new Config(dropdownConfig.title, dropdownConfig.model)

export default config