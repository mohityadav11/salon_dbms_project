import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';

import {login} from '../api/auth.api';
import {authenticate} from '../helpers/auth.helper';

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

class LoginPage extends React.Component {
  state = {
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

  handleSubmit = e => {
    if (!this.state.email || !this.state.password) {
      this.setState (() => ({error: 'All fields are necessary'}));
    } else {
      const user = {
        email: this.state.email,
        password: this.state.password,
      };

      login (user).then (jwt => {
        authenticate (jwt, () => {
          console.log ('DONE');
        });
      });
    }
  };

  render () {
    const {classes} = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5">Login</Typography>
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
              onClick={this.handleSubmit}
            >
              Login
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withStyles (styles) (LoginPage);
