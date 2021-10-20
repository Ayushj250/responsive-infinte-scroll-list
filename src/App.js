import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import './App.css';
import * as paths from './constants/paths';
import HomePage from './containers/HomePage';
import Login from './containers/Login';

function App() {
  const userLogin = useSelector((state) => state.userLogin);

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact render={() => {
          return (
            !userLogin.isLoggedIn ?
              <Redirect to={paths.LOGIN} /> :
              <Redirect to={paths.HOME} />
          )
        }} />
        <Route path={paths.LOGIN} component={Login} exact />
        <Route path={paths.HOME} component={HomePage} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
