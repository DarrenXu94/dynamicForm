import React, { Component } from 'react';
import DynamicForm from './DynamicForm'
import Config from './Config';
import config from '../config'

let textareaConfig = {
    title: 'Checkbox text',
    model: [
        // {key:"Form", type:"textarea",text: "Paste your form here", textarea: {rows: 4, cols: 50}},
        {key:"Form", type:"textarea",text: JSON.stringify(config), textarea: {rows: 4, cols: 50}}

    ]
}

let txtConfig = new Config(textareaConfig.title, textareaConfig.model)

class DisplayForm extends Component {
    state = {
        config:  config
    }
    onSubmit = (e) => {
        // console.log(e)
        let jsonForm = JSON.parse(e.Form)
        console.log(jsonForm)
        let jsonFormConfig = new Config(jsonForm.title, jsonForm.model)
        this.setState({config: jsonFormConfig})
    }
    render() {
        let {config} = this.state
        return (
            <div>
                <DynamicForm config={txtConfig} onSubmit={this.onSubmit} onChange={()=>{}}/>
                <hr />
                <DynamicForm config={config} onSubmit={()=> {}} onChange={()=>{}}/>
                <hr />

            </div>
        );
    }
}

export default DisplayForm;