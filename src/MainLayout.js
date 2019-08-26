import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import App from './App';
import Login from './Login';
import NotFound from './components/NotFound.js';


export default class MainLayout extends React.Component {
  render() {
    return (
       <Router>
   

        
            <Switch>
              <Route exact path='/' component={Login} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/app' component={App} />
              <Route component={NotFound} />
            </Switch>

      </Router>
    );
  }
}
