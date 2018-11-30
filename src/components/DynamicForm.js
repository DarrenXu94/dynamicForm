import React, { Component } from 'react';
import FormItem from './FormItem'

class DynamicForm extends Component {
    state = {
    }
    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    render() {
        let { title, model } = this.props.config.jsonPattern
        return (
            <form>
                <h4>{title}</h4>
                { model.map(item => {
                    return <FormItem key={item.key} item={item} onChange={this.onChange} formValues={this.state}/>
                    }) }
            </form>
        );
    }
}

export default DynamicForm;

// Props config {title, model: []}