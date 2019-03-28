import React from 'react';
import {Link} from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';

import {list} from '../../api/salon.api';
import {isAuthenticated} from '../../helpers/auth.helper';
import Item from '../components/Item';

const styles = theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    textAlign: 'center',
  },
  title: {
    marginTop: theme.spacing.unit * 2,
  },
  link: {
    textDecoration: 'none',
  },
  button: {
    margin: 'auto',
    marginBottom: theme.spacing.unit * 2,
  },
});

class HomePage extends React.Component {
  state = {
    salons: [],
  };

  componentDidMount () {
    const {token} = isAuthenticated ();

    list (token, 2).then (salons => {
      this.setState (() => ({salons}));
    });
  }

  render () {
    const {classes} = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <Typography className={classes.title} variant="h4">Salons</Typography>
          <CardContent>
            <List>
              {this.state.salons.map (salon => (
                <Item key={salon.id} salon={salon} />
              ))}
            </List>
          </CardContent>
          <CardActions>
            <Link className={classes.link} to="/salon">
              <Button className={classes.button}>More Salons</Button>
            </Link>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withStyles (styles) (HomePage);
