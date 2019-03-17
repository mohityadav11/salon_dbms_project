import React from 'react';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

class SignupPage extends React.Component {
  state = {
    firstName: '',
    middleName: '',
    lastName: '',
    gender: 'M',
    email: '',
    password: '',
  };

  onFieldChange = field => {
    return e => {
      const value = e.target.value;
      this.setState (() => ({[field]: value}));
    };
  };

  render () {
    return (
      <div>
        <Typography>Signup</Typography>
        <TextField
          value={this.state.firstName}
          label="First Name"
          margin="normal"
          onChange={this.onFieldChange ('firstName')}
        />
        <br />
        <TextField
          value={this.state.middleName}
          label="Middle Name"
          margin="normal"
          onChange={this.onFieldChange ('middleName')}
        />
        <br />
        <TextField
          value={this.state.lastName}
          label="Last Name"
          margin="normal"
          onChange={this.onFieldChange ('lastName')}
        />
        <br />
        <TextField
          value={this.state.gender}
          select
          label="Gender"
          onChange={this.onFieldChange ('gender')}
        >
          <MenuItem value={'M'}>M</MenuItem>
          <MenuItem value={'F'}>F</MenuItem>
          <MenuItem value={'O'}>O</MenuItem>
        </TextField><br />
        <TextField
          value={this.state.email}
          label="Email"
          margin="normal"
          onChange={this.onFieldChange ('email')}
        />
        <br />
        <TextField
          value={this.state.password}
          label="Password"
          margin="normal"
          onChange={this.onFieldChange ('password')}
        />
        <br />
      </div>
    );
  }
}

export default SignupPage;
