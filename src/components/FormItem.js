import React, { Component } from 'react';

class FormItem extends Component {
    render() {
        let { item, formValues } = this.props
        let renderForm
        let thisValue = (item.key in formValues) ? formValues[item.key] : ''

        switch(item.type){
            case 'text':
                renderForm =  <input type="text" name={item.key} value={thisValue} onChange={this.props.onChange}/>
                break
            case 'textarea':
                renderForm = <textarea name={item.key} rows="4" cols="50" value={thisValue} onChange={this.props.onChange}/>
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