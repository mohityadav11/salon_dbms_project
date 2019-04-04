import React from 'react';
import {Link} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

const Header = props => {
  const {classes} = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6">Salon DBMS Project</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles (styles) (Header);
