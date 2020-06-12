import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Users from './components/Users/Users';
import User from './components/Users/User';
import Search from './components/Users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import GithubState from './context/github/GithubState';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const App = () => {
  const [alert, setAlert] = useState(null);
  //search github users

  //get single github user

  //get user repos

  //clear users from state

  //show Alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 4000);
  };

  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search setAlert={showAlert} />

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
    </GithubState>
  );
};

export default App;
