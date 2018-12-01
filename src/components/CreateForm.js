import React, { Component } from 'react';
import DynamicForm from './DynamicForm'
import Config from './Config';

let jsonConfig = {
    title: 'Add a new form',
    model: [
        {
            key: "FormType", type: "dropdown", select: {
                default: 'text', options: [
                    { value: 'text', text: 'Text' },
                    { value: 'textarea', text: 'Textarea' },
                    { value: 'checkbox', text: 'Checkbox' }
                ]
            }
        }
    ]
}

let config = new Config(jsonConfig.title, jsonConfig.model)

class CreateForm extends Component {
    onSubmit(form) {
        console.log(form)
    }
    render() {
        return (
            <div>
                <DynamicForm config={config} onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default CreateForm;