import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import SignupPage from '../pages/SignupPage';

const MainRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/signup" component={SignupPage} />
    </Switch>
  </BrowserRouter>
);

export default MainRouter;
