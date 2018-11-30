import React, { Component } from 'react';
import './App.css';
import DynamicForm from './components/DynamicForm'

import config from './config'

class App extends Component {
  render() {
    return (
      <div className="App">
          <h3>Dynamically generate forms from JSON</h3>
          <DynamicForm config={config}/>
      </div>
    );
  }
}

export default App;
