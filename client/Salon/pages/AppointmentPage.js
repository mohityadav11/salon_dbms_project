import React from 'react';
import _ from 'lodash';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import {listServices} from '../../api/service.api';
import {list} from '../../api/staff.api';
import {isAuthenticated} from '../../helpers/auth.helper';
import {createAppointment} from '../../api/appointment.api';

class AppointmentPage extends React.Component {
  state = {
    services: [],
    checkedServices: [],
    staffs: [],
    staff: '',
    totalCost: 0,
    startDate: new Date (),
  };

  componentDidMount () {
    const {token} = isAuthenticated ();
    const {salonId} = this.props.match.params;

    listServices (token, salonId).then (services => {
      this.setState (() => ({services}));
    });

    list (token, salonId).then (staffs => {
      this.setState (() => ({staffs}));
    });
  }

  handleDateChange = date => {
    this.setState (() => ({startDate: date}));
  };

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

  onStaffChange = e => {
    const staff = e.target.value;

    this.setState (() => ({staff}));
  };

  getTotalCost = () => {
    let totalCost = 0;
    this.state.checkedServices.forEach (service => {
      totalCost = totalCost + service.cost;
    });

    return totalCost;
  };

  handleSubmit = () => {
    const {user, token} = isAuthenticated ();
    const {salonId} = this.props.match.params;

    const appointment = {
      timing: this.state.startDate,
      user_id: user.id,
      salon_id: parseInt (salonId, 10),
      staff_id: parseInt (this.state.staff, 10),
      services: this.state.checkedServices.map (service => {
        return service.id;
      }),
    };

    console.log (appointment);
    console.log (typeof appointment.timing);
    createAppointment (token, appointment);
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
        {this.state.staffs.map (staff => (
          <div key={staff.id}>
            <input
              type="radio"
              name="staff"
              id={staff.first_name}
              value={staff.id}
              onChange={this.onStaffChange}
            />
            <label htmlFor={staff.first_name}>{staff.first_name}</label>
          </div>
        ))}
        {this.getTotalCost ()}
        <div>
          <DatePicker
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={60}
            selected={this.state.startDate}
            onChange={this.handleDateChange}
            dateFormat="MMMM d, yyyy h:mm aa"
          />
        </div>
        <button onClick={this.handleSubmit}>Book Appointment</button>
      </div>
    );
  }
}

export default AppointmentPage;
