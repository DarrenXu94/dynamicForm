import React, { Component } from 'react';
import DynamicForm from './DynamicForm'
import Config from './Config';

let jsonConfig = {
    title: 'Add a new form',
    model: [
        {key:"key", type:"text"},
        {
            key: "type", type: "dropdown", select: {
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
    state = {
        currentForm: {title:'test', model: []}
    }
    onSubmit = (form) => {
        let tempForm = this.state.currentForm
        tempForm.model.push(form)
        this.setState({currentForm: tempForm})
    }
    render() {
        return (
            <div>
                <DynamicForm config={config} onSubmit={this.onSubmit} />
                <textarea value={JSON.stringify(this.state.currentForm, null, 2)} rows="20" cols="50" readOnly/>
            </div>
        );
    }
}

export default CreateForm;