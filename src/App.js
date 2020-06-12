import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Users from './components/Users/Users';
import User from './components/Users/User';
import Search from './components/Users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import GithubState from './context/github/GithubState';
import ALertState from './context/alert/AlertState';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const App = () => {
  return (
    <GithubState>
      <ALertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Fragment>
                      <Search />

                      <Users />
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
                <Route exact path="/user/:login" component={User} />
              </Switch>
            </div>{' '}
          </div>
        </Router>
      </ALertState>
    </GithubState>
  );
};

export default App;
