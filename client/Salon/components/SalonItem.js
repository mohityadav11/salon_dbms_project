import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const SalonItem = ({salon}) => (
  <ListItem button>
    <ListItemText primary={salon.name} secondary={salon.location} />
  </ListItem>
);

export default SalonItem;
