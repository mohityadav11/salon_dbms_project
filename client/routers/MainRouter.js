import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';
import Header from '../components/Header';

const MainRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default MainRouter;
