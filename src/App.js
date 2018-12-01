import React, { Component } from 'react';
import './App.css';
import DynamicForm from './components/DynamicForm'

import config from './config'

import CreateForm from './components/CreateForm'

class App extends Component {
  onSubmit(form){
    console.log(form)
  }
  render() {
    return (
      <div className="App">
          <h3>Dynamically generate forms from JSON</h3>
          <DynamicForm config={config} onSubmit={this.onSubmit}/>
          <CreateForm />
      </div>
    );
  }
}

export default App;
