import React from 'react';
import _ from 'lodash';

import AppointmentTimeTable from '../components/AppointmentTimeTable';

import {listServices} from '../../api/service.api';
import {isAuthenticated} from '../../helpers/auth.helper';

class AppointmentPage extends React.Component {
  state = {
    services: [],
    checkedServices: [],
    totalCost: 0,
  };

  componentDidMount () {
    const {token} = isAuthenticated ();
    const {salonId} = this.props.match.params;

    listServices (token, salonId).then (services => {
      this.setState (() => ({services}));
    });
  }

  onFieldChange = e => {
    const value = parseInt (e.target.value, 10);
    if (e.target.checked) {
      this.setState (() => ({
        checkedServices: [
          ...this.state.checkedServices,
          this.state.services.find (service => service.id === value),
        ],
      }));
    } else {
      this.setState (() => ({
        checkedServices: _.pull (
          this.state.checkedServices,
          this.state.services.find (service => service.id === value)
        ),
      }));
    }
  };

  getTotalCost = () => {
    let totalCost = 0;
    this.state.checkedServices.forEach (service => {
      totalCost = totalCost + service.cost;
    });

    return totalCost;
  };

  render () {
    return (
      <div>
        {this.state.services.map (service => (
          <div key={service.id}>
            <input
              type="checkbox"
              id={service.id}
              value={service.id}
              onChange={this.onFieldChange}
            />
            <label htmlFor={service.id}>{service.name}</label>
          </div>
        ))}
        {this.getTotalCost ()}
        <AppointmentTimeTable />
      </div>
    );
  }
}

export default AppointmentPage;
