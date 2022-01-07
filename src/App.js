import './App.css';
import React, { Component } from 'react';
import Form from './Components/Form'


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <h1 className="header">EMPLOYEE FEEDBACK FORM</h1>
        <Form />
      </div>
    );
  }
}
export default App;