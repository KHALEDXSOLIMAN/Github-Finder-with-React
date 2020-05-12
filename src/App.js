import React, { Component } from 'react';

import Navbar from './components/layout/Navbar';
import Users from './components/Users/Users';
import Search from './components/Users/Search';
import Alert from './components/layout/Alert';

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };
  // async componentDidMount() {
  //   //console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
  //   this.setState({ loading: true });
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
  //   client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   this.setState({ users: res.data, loading: false });
  // }
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
    client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ users: res.data.items, loading: false });
  };
  //clear users from state
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };
  //set Alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 4000);
  };
  render() {
    const { users, loading } = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={this.state.users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={loading} users={users} />
        </div>{' '}
      </div>
    );
  }
}

export default App;
