import React from 'react';

import Typography from '@material-ui/core/Typography';

import {read} from '../../api/salon.api';
// import {isAuthenticated} from '../../helpers/auth.helper';
import {isAuthenticated} from '../../helpers/auth.helper';

class SalonPage extends React.Component {
  state = {
    salon: null,
  };

  componentDidMount () {
    const {token} = isAuthenticated ();
    const {salonId} = this.props.match.params;
    read (token, salonId).then (salon => {
      this.setState (() => ({salon}));
    });
  }

  render () {
    const {salon} = this.state;
    return (
      <div>
        {this.state.salon
          ? <div><Typography>Name: {salon.name}</Typography></div>
          : <div>Loading</div>}
      </div>
    );
  }
}

export default SalonPage;
