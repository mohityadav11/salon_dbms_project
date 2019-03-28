import React from 'react';
import {Link} from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import {read} from '../../api/salon.api';
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
          ? <div>
              <Typography>Name: {salon.name}</Typography>
              <Link to={`/salon/${salon.id}/staff/create`}>
                <Button>Add Staff</Button>
              </Link>
            </div>
          : <div>Loading</div>}
      </div>
    );
  }
}

export default SalonPage;
