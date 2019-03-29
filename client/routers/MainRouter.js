import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';
import Header from '../components/Header';
import HomePage from '../Home/pages/HomePage';
import SalonListPage from '../Salon/pages/SalonListPage';
import SalonPage from '../Salon/pages/SalonPage';
import AddStaffPage from '../Salon/pages/AddStaffPage';
import UpdateStaffPage from '../Salon/pages/UpdateStaffPage';
import AddSalonPage from '../Salon/pages/AddSalonPage';
import UpdateSalonPage from '../Salon/pages/UpdateSalonPage';
import AddServicePage from '../Salon/pages/AddServicePage';

const history = createBrowserHistory ();

const MainRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/salon/:salonId/service/create"
          component={AddServicePage}
        />
        <Route path="/salon/:salonId/staff/create" component={AddStaffPage} />
        <Route
          path="/salon/:salonId/staff/:staffId"
          component={UpdateStaffPage}
        />
        <Route path="/salon/create" component={AddSalonPage} />
        <Route path="/salon/:salonId/update" component={UpdateSalonPage} />
        <Route path="/salon/:salonId" component={SalonPage} />
        <Route path="/salon" component={SalonListPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </div>
  </Router>
);

export default MainRouter;
