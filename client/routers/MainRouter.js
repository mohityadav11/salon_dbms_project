import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';
import Header from '../components/Header';
import CreateSalonPage from '../Salon/pages/CreateSalonPage';

const MainRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/salon/create" component={CreateSalonPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default MainRouter;
