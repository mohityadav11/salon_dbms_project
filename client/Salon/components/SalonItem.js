import React from 'react';
import {Link} from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const SalonItem = ({salon}) => (
  <Link to={`/salon/${salon.id}`}>
    <ListItem button>
      <ListItemText primary={salon.name} secondary={salon.location} />
    </ListItem>
  </Link>
);

export default SalonItem;
