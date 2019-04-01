import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class AppointmentTimeTable extends React.Component {
  state = {
    startDate: new Date (),
  };

  handleDateChange = date => {
    console.log (date);
    this.setState (() => ({startDate: date}));
  };

  render () {
    return (
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
    );
  }
}

export default AppointmentTimeTable;
