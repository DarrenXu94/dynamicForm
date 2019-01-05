import React, { Component } from 'react';

class FormItem extends Component {
    render() {
        let { item, formValues } = this.props
        let renderForm
        let thisValue = (item.key in formValues) ? formValues[item.key] : ''

        switch(item.type){
            case 'text':
                renderForm = <label> {item.text} <br /> <input type="text" name={item.key} value={thisValue} onChange={this.props.onChange} placeholder={item.key}/> </label>
                break
            case 'textarea':
                let rows = (item.textarea === undefined) ? 20 : item.textarea.rows ;
                let cols = (item.textarea === undefined) ? 40 : item.textarea.cols ;

                renderForm = <label> {item.key} <br /><textarea id={item.key} name={item.key} rows={rows} cols={cols} value={thisValue} onChange={this.props.onChange} placeholder={item.text}/></label>
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