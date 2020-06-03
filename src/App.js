import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Users from './components/Users/Users';
import User from './components/Users/User';
import Search from './components/Users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  state = {
    user: {},
    users: [],
    repos: [],
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
  //get single github user
  getUser = async (login) => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users/${login}?&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
  client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ user: res.data, loading: false });
  };

  //get user repos
  getUserRepos = async (login) => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users/${login}/repos?per_page=4&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
  client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ repos: res.data, loading: false });
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
    const { users, user, repos, loading } = this.state;

    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={this.state.users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />

                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />

              <Route
                exact
                path="/about"
                render={(props) => (
                  <Fragment>
                    <About></About>
                  </Fragment>
                )}
              />
              <Route exact path="/about" Component={About} />
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    getUserRepos={this.getUserRepos}
                    user={user}
                    repos={repos}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>{' '}
        </div>
      </Router>
    );
  }
}

export default App;
