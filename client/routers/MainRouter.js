import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';
import Header from '../components/Header';
import CreateSalonPage from '../Salon/pages/CreateSalonPage';
import HomePage from '../Home/pages/HomePage';
import SalonListPage from '../Salon/pages/SalonListPage';
import SalonPage from '../Salon/pages/SalonPage';

const MainRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/salon/:salonId" component={SalonPage} />
        <Route path="/salon" component={SalonListPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/salon/create" component={CreateSalonPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default MainRouter;
