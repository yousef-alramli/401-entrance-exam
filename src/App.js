import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import Fav from './components/Fav';

export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/">
              {this.props.auth0.isAuthenticated ? <HomePage/> : <LoginPage />}
            </Route>
            <Route exact path="/fav">
<Fav/>
            </Route>
          </Switch>
        </Router>
        {/* @todo show login button and hide the list for unauthenticated users */}
        {/* @todo show logout button and show items list components for authenticated users */}
      </>
    )
  }
}

export default withAuth0(App);
