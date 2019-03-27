import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Item = ({salon}) => (
  <ListItem button>
    <ListItemText primary={salon.name} secondary={salon.location} />
  </ListItem>
);

export default Item;
