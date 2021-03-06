import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import User from './components/Users/User';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import GithubState from './context/github/GithubState';
import ALertState from './context/alert/AlertState';

import 'bootstrap/dist/css/bootstrap.css';

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
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>{' '}
          </div>
        </Router>
      </ALertState>
    </GithubState>
  );
};

export default App;
