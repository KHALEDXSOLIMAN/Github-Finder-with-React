import React, { Component } from 'react';

import Navbar from './components/layout/Navbar';
import Users from './components/Users/Users';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Badge } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Users />
      </div>
    );
  }
}

export default App;
