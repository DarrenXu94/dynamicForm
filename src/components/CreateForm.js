import React, { Component } from 'react';
import DynamicForm from './DynamicForm'
import Config from './Config';

import CheckboxConfig from './CreateFormConfigs.js/CheckboxConfig'
import TextareaConfig from './CreateFormConfigs.js/TextareaConfig'
import DropdownConfig from './CreateFormConfigs.js/DropdownConfig'


let jsonConfig = {
    title: 'Add a new form',
    model: [
        { key: "key", type: "text", text: "Enter a unique key (the value)" },
        {
            key: "type", type: "dropdown", select: {
                default: 'text', options: [
                    { value: 'text', text: 'Text' },
                    { value: 'textarea', text: 'Textarea' },
                    { value: 'checkbox', text: 'Checkbox' },
                    { value: 'dropdown', text: 'Dropdown' }

                ]
            }
        }
    ]
}

let config = new Config(jsonConfig.title, jsonConfig.model)

let titleConfig = new Config("Title", [{ key: "title", type: "text", text: "Enter a title" }])

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const stringToDropdownValues = (data) => {
    let res = { select: {} }
    let inputs = data.trim().split(',')
    let options = inputs.map(value => {
        return { value: value, text: capitalizeFirstLetter(value) }
    })
    res.select.default = options[0].value
    res.select.options = options

    return res
}


class CreateForm extends Component {
    state = {
        currentForm: { title: 'test', model: [] },
        extraForms: [],
        extraFormFields: {},
        readyToSubmit: true
    }

    copyToClipboard = str => {
        const el = document.createElement('textarea');
        el.value = str;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    };

    onCopyToKeyboard = (e) => {
        e.preventDefault()
        this.copyToClipboard(JSON.stringify(this.state.currentForm, null, 2))
    }

    onSubmit = (form) => {
        if (Object.keys(form).length === 0 || form.type === "none") {
            return;
        } else {
            let tempForm = this.state.currentForm
            let eff = this.state.extraFormFields
            let hasExtraFields = Object.keys(eff).length !== 0
            let merged
            if (hasExtraFields) {
                if ('dropdownConfig' in eff) {
                    let res = stringToDropdownValues(eff.dropdownConfig)
                    merged = { ...form, ...res }
                } else {
                    merged = { ...form, ...eff };
                }
            } else {
                merged = { ...form, ...eff };
            }
            tempForm.model.push(merged)
            this.setState({ currentForm: tempForm })
        }
    }
    onTitleSubmit = (form) => {
        let tempForm = this.state.currentForm
        tempForm.title = form.title
        this.setState({ currentForm: tempForm })
    }
    onChange = (e) => {
        const target = e.target;
        if (target.name === 'type') {
            this.setState({ readyToSubmit: false })
            switch (target.value) {
                case ('checkbox'):
                    let chkConfig = CheckboxConfig
                    this.setState({ extraForms: [chkConfig] })
                    break;
                case ('textarea'):
                    let txtareaConfig = TextareaConfig
                    this.setState({ extraForms: [txtareaConfig] })
                    break;
                case ('dropdown'):
                    let dropdownConfig = DropdownConfig
                    this.setState({ extraForms: [dropdownConfig] })
                    break;
                default:
                    this.setState({ extraForms: [], extraFormFields: {}, readyToSubmit: true })
            }
        }

    }
    onExtraformSubmit = (e) => {
        this.setState({ extraFormFields: e, readyToSubmit: true })
    }
    render() {
        let { extraForms, readyToSubmit } = this.state
        return (
            <div>
                <DynamicForm config={titleConfig} onSubmit={this.onTitleSubmit} onChange={() => {}} />

                <DynamicForm config={config} onSubmit={this.onSubmit} onChange={this.onChange} isDisabled={!readyToSubmit} />
                {extraForms !== [] && extraForms.map(f => {
                    return <DynamicForm key={f.title} config={f} onSubmit={this.onExtraformSubmit} onChange={() => { }} />
                })}
                <textarea value={JSON.stringify(this.state.currentForm, null, 2)} rows="20" cols="50" readOnly />
                <br />
                <button onClick={this.onCopyToKeyboard}>Copy to clipboard</button>
            </div>
        );
    }
}

export default CreateForm;