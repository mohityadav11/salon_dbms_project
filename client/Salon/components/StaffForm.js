import React from 'react';

class StaffForm extends React.Component {
  state = {
    first_name: this.props.staff ? this.props.staff.first_name : '',
    last_name: this.props.staff ? this.props.staff.last_name : '',
    age: this.props.staff ? this.props.staff.age : '',
    gender: this.props.staff ? this.props.staff.gender : '',
    contact_no: this.props.staff ? this.props.staff.contact_no : '',
  };

  onFieldChange = name => {
    return e => {
      const value = e.target.value;
      this.setState (() => ({[name]: value}));
    };
  };

  onSubmit = () => {
    const {salonId} = this.props;
    const staff = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      age: this.state.age,
      gender: this.state.gender,
      contact_no: this.state.contact_no,
      salon_id: parseInt (salonId, 10),
    };

    this.props.onSubmit (staff);
  };

  render () {
    return (
      <div>

        <h1>{this.props.title}</h1>
        <input
          type="text"
          placeholder="First Name"
          value={this.state.first_name}
          onChange={this.onFieldChange ('first_name')}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={this.state.last_name}
          onChange={this.onFieldChange ('last_name')}
        />
        <input
          type="text"
          placeholder="Age"
          value={this.state.age}
          onChange={this.onFieldChange ('age')}
        />
        <input
          type="text"
          placeholder="Gender"
          value={this.state.gender}
          onChange={this.onFieldChange ('gender')}
        />
        <input
          type="text"
          placeholder="Contact Number"
          value={this.state.contact_no}
          onChange={this.onFieldChange ('contact_no')}
        />
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}

export default StaffForm;
