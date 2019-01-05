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
        this.props.onChange(e)
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

                { model.map(item => {
                    return <FormItem key={item.key} item={item} onChange={this.onChange} formValues={this.state}/>
                    }) }
                <button disabled={this.props.isDisabled} onClick={this.onSubmit}>Submit</button>
            </form>
        );
    }
}

export default DynamicForm;

DynamicForm.propTypes = {
    config: PropTypes.instanceOf(Config),
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func,
    isDisabled: PropTypes.bool
}