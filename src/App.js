import React, { Component } from 'react';
import './App.css';

import CreateForm from './components/CreateForm'
import DisplayForm from './components/DisplayForm'

class App extends Component {

  render() {
    return (
      <div className="App">
          <h3>Dynamically generate forms from JSON</h3>
          <DisplayForm />
          <CreateForm />
      </div>
    );
  }
}

export default App;
