import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import {isAuthenticated} from '../../helpers/auth.helper';
import {create} from '../../api/staff.api';

class StaffForm extends React.Component {
  state = {
    first_name: '',
    last_name: '',
    age: '',
    gender: '',
    contact_no: '',
  };

  onFieldChange = name => {
    return e => {
      const value = e.target.value;
      this.setState (() => ({[name]: value}));
    };
  };

  onSubmit = () => {
    const {token} = isAuthenticated ();
    const {salonId} = this.props.match.params;
    const salon = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      age: this.state.age,
      gender: this.state.gender,
      contact_no: this.state.contact_no,
      salon_id: parseInt (salonId, 10),
    };

    // console.log (salon);

    create (token, salon);
  };

  render () {
    return (
      <div>
        <Card>
          <CardContent>
            <Typography>Create Staff</Typography>
            <TextField
              label="First Name"
              value={this.state.first_name}
              onChange={this.onFieldChange ('first_name')}
            />
            <TextField
              label="Last Name"
              value={this.state.last_name}
              onChange={this.onFieldChange ('last_name')}
            />
            <TextField
              label="Age"
              value={this.state.age}
              onChange={this.onFieldChange ('age')}
            />
            <TextField
              label="Gender"
              value={this.state.gender}
              onChange={this.onFieldChange ('gender')}
            />
            <TextField
              label="Contact Number"
              value={this.state.contact_no}
              onChange={this.onFieldChange ('contact_no')}
            />
          </CardContent>
          <CardActions>
            <Button onClick={this.onSubmit}>Submit</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default StaffForm;
