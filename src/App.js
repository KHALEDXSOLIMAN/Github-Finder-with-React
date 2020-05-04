import React, { Component } from 'react';

import Navbar from './components/layout/Navbar';
import Users from './components/Users/Users';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get('https://api.github.com/users');
    this.setState({ users: res.data, loading: false });
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Users loading={this.state.loading} users={this.state.users} />
      </div>
    );
  }
}

export default App;
