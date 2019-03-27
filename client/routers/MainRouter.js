import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';

const MainRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/signup" component={SignupPage} />
      <Route path="/login" component={LoginPage} />
    </Switch>
  </BrowserRouter>
);

export default MainRouter;
