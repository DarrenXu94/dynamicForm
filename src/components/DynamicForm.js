import React, { Component } from 'react';
import FormItem from './FormItem'
import PropTypes from 'prop-types';
import Config from './Config'

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
        this.props.onSubmit(this.state)
    }
    render() {
        let { title, model } = this.props.config
        return (
            <form>
                <h4>{title}</h4>
                {/* <textarea value={JSON.stringify(this.props.config, null, 2)} rows="20" cols="50" readOnly/> */}

                { model.map(item => {
                    return <FormItem key={item.key} item={item} onChange={this.onChange} formValues={this.state}/>
                    }) }
                <button onClick={this.onSubmit}>Submit</button>
                {/* <hr /> */}
            </form>
        );
    }
}

export default DynamicForm;

DynamicForm.propTypes = {
    config: PropTypes.instanceOf(Config),
    onSubmit: PropTypes.func.isRequired
}