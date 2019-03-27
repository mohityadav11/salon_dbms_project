import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import {isAuthenticated} from '../../helpers/auth.helper';
import {create} from '../../api/salon.api';

class CreateSalonPage extends React.Component {
  state = {
    name: '',
    location: '',
    contact_no: '',
    website_link: '',
    email: '',
  };

  handleFieldChange = field => {
    return e => {
      const value = e.target.value;
      this.setState (() => ({[field]: value}));
    };
  };

  handleSubmit = e => {
    const {token} = isAuthenticated ();
    const salon = {
      name: this.state.name,
      location: this.state.location,
      contact_no: this.state.contact_no,
      website_link: this.state.website_link,
      email: this.state.email,
    };

    create (salon, token);
  };

  render () {
    return (
      <div>
        <Card>
          <CardContent>
            <Typography variant="h5">Salon Details</Typography>
            <TextField
              label="Name"
              value={this.state.name}
              onChange={this.handleFieldChange ('name')}
            />
            <TextField
              label="Location"
              value={this.state.location}
              onChange={this.handleFieldChange ('location')}
            />
            <TextField
              label="Contact No"
              value={this.state.contact_no}
              onChange={this.handleFieldChange ('contact_no')}
            />
            <TextField
              label="Website Link"
              value={this.state.website_link}
              onChange={this.handleFieldChange ('website_link')}
            />
            <TextField
              label="Email"
              value={this.state.email}
              onChange={this.handleFieldChange ('email')}
            />
          </CardContent>
          <CardActions>
            <Button onClick={this.handleSubmit}>Submit</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default CreateSalonPage;
