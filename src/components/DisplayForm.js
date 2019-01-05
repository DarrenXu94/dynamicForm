import React, { Component } from 'react';
import DynamicForm from './DynamicForm'
import Config from './Config';
import config from '../config'

let textareaConfig = {
    title: 'Paste your form code here',
    model: [
        // {key:"Form", type:"textarea",text: "Paste your form here", textarea: {rows: 4, cols: 50}},
        { key: "Form_Input", type: "textarea", text: JSON.stringify(config), textarea: { rows: 4, cols: 50 } }

    ]
}

let txtConfig = new Config(textareaConfig.title, textareaConfig.model)

class DisplayForm extends Component {
    state = {
        config: config
    }

    onSubmit = (e) => {
        // console.log(e)
        let jsonForm = JSON.parse(e.Form_Input)
        console.log(jsonForm)
        let jsonFormConfig = new Config(jsonForm.title, jsonForm.model)
        this.setState({ config: jsonFormConfig })
    }
    render() {
        let { config } = this.state
        return (
            <div className="display-wrapper ">
                <div>
                    <DynamicForm config={txtConfig} onSubmit={this.onSubmit} onChange={() => { }} />
                </div>
                <div>
                    <h4>Form Generated</h4>
                    <DynamicForm config={config} onSubmit={(e) => { console.log(e) }} onChange={() => { }} />
                </div>
            </div>
        );
    }
}

export default DisplayForm;