import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';

import {create} from '../api/user.api';

const styles = theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    textAlign: 'center',
  },
  textField: {
    width: 300,
  },
  button: {
    margin: 'auto',
    marginBottom: theme.spacing.unit * 5,
  },
});

class SignupPage extends React.Component {
  state = {
    firstName: '',
    middleName: '',
    lastName: '',
    gender: 'M',
    email: '',
    password: '',
    error: '',
  };

  onFieldChange = field => {
    return e => {
      const value = e.target.value;
      this.setState (() => ({[field]: value}));
    };
  };

  onSubmit = () => {
    if (
      !this.state.firstName ||
      !this.state.lastName ||
      !this.state.gender ||
      !this.state.email ||
      !this.state.password
    ) {
      this.setState (() => ({
        error: 'All fields are necessary.',
      }));
    } else {
      const user = {
        firstName: this.state.firstName,
        middleName: this.state.middleName || null,
        lastName: this.state.lastName,
        gender: this.state.gender,
        email: this.state.email,
        password: this.state.password,
      };

      create (user).then (data => {
        console.log (data);
      });
    }
  };

  render () {
    const {classes} = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5">Signup</Typography>
            <TextField
              className={classes.textField}
              value={this.state.firstName}
              label="First Name"
              margin="normal"
              onChange={this.onFieldChange ('firstName')}
            />
            <br />
            <TextField
              className={classes.textField}
              value={this.state.middleName}
              label="Middle Name (Optional)"
              margin="normal"
              onChange={this.onFieldChange ('middleName')}
            />
            <br />
            <TextField
              className={classes.textField}
              value={this.state.lastName}
              label="Last Name"
              margin="normal"
              onChange={this.onFieldChange ('lastName')}
            />
            <br />
            <TextField
              className={classes.textField}
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
              className={classes.textField}
              value={this.state.email}
              label="Email"
              margin="normal"
              onChange={this.onFieldChange ('email')}
            />
            <br />
            <TextField
              className={classes.textField}
              value={this.state.password}
              label="Password"
              margin="normal"
              onChange={this.onFieldChange ('password')}
            />
            <br />
            {this.state.error && <Typography>{this.state.error}</Typography>}
          </CardContent>
          <CardActions>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={this.onSubmit}
            >
              Submit
            </Button>
          </CardActions>
        </Card>

      </div>
    );
  }
}

export default withStyles (styles) (SignupPage);
