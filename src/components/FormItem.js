import React, { Component } from 'react';

class FormItem extends Component {
    render() {
        let { item, formValues } = this.props
        let renderForm
        let thisValue = (item.key in formValues) ? formValues[item.key] : ''

        switch(item.type){
            case 'text':
                renderForm =  <input type="text" name={item.key} value={thisValue} onChange={this.props.onChange} placeholder={item.key}/>
                break
            case 'textarea':
                renderForm = <textarea name={item.key} rows={item.textarea.rows} cols={item.textarea.cols} value={thisValue} onChange={this.props.onChange} placeholder={item.key}/>
                break 
            case 'dropdown':
                renderForm = <select name={item.key} onChange={this.props.onChange} defaultValue="none">
                <option value="none">None</option>
                {item.select.options.map(option => {
                    return <option key={option.value} value={option.value} >{option.text}</option>
                })}

                </select>
                break    
            case 'checkbox':
                renderForm = <label> <input type="checkbox" name={item.key} checked={thisValue} onChange={this.props.onChange} /> {item.text} </label>

                break
            default:
                renderForm = <p>Invalid form item</p>
                break
        }
        return (
            <div>
                {renderForm}
            </div>
        );
    }
}

export default FormItem;