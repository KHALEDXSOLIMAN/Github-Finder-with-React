import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Usersitem from './components/Users/Usersitem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Usersitem />
      </div>
    );
  }
}

export default App;
