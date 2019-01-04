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

let checkboxConfig = {
    title: 'Checkbox text',
    model: [
        {key:"text", type:"text"}
    ]
}

let config = new Config(jsonConfig.title, jsonConfig.model)

class CreateForm extends Component {
    state = {
        currentForm: {title:'test', model: []},
        extraForms: [],
        extraFormFields: {}
    }
    onSubmit = (form) => {
        let tempForm = this.state.currentForm
        let merged = {...form, ...this.state.extraFormFields};

        tempForm.model.push(merged)
        this.setState({currentForm: tempForm})
    }
    onChange = (e) => {
        const target = e.target;
        if (target.value === "checkbox") {
            let chkConfig = new Config(checkboxConfig.title, checkboxConfig.model)
            let tmpExtraForms = this.state.extraForms
            tmpExtraForms.push(chkConfig)
            this.setState({extraForms: tmpExtraForms})
        }
    }
    onExtraformSubmit = (e) => {
        console.log('extra form submit',e)
        this.setState({extraFormFields: e})
 
    }
    render() {
        let { extraForms } = this.state
        return (
            <div>
                <DynamicForm config={config} onSubmit={this.onSubmit} onChange={this.onChange}/>
                { extraForms !== [] && extraForms.map(f => {
                    return <DynamicForm key={f.title} config={f} onSubmit={this.onExtraformSubmit} onChange={()=>{}}/>
                })}
                <textarea value={JSON.stringify(this.state.currentForm, null, 2)} rows="20" cols="50" readOnly/>
            </div>
        );
    }
}

export default CreateForm;