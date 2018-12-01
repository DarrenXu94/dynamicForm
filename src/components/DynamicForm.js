import React, { Component } from 'react';
import FormItem from './FormItem'

class DynamicForm extends Component {
    state = {
    }
    onChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({[e.target.name]:value})
    }
    onSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }
    render() {
        let { title, model } = this.props.config.jsonPattern
        return (
            <form>
                <h4>{title}</h4>
                { model.map(item => {
                    return <FormItem key={item.key} item={item} onChange={this.onChange} formValues={this.state}/>
                    }) }
                <button onClick={this.onSubmit}>Submit</button>
            </form>
        );
    }
}

export default DynamicForm;

// Props config {title, model: []}