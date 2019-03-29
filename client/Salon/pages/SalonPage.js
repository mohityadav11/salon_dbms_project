import React from 'react';
import {Link} from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import {read} from '../../api/salon.api';
import {list} from '../../api/staff.api';
import {isAuthenticated} from '../../helpers/auth.helper';

class SalonPage extends React.Component {
  state = {
    salon: null,
    staffs: [],
  };

  componentDidMount () {
    const {token} = isAuthenticated ();
    const {salonId} = this.props.match.params;
    read (token, salonId).then (salon => {
      this.setState (() => ({salon}));
    });

    list (token, salonId).then (staffs => {
      this.setState (() => ({staffs}));
    });
  }

  render () {
    const {salon} = this.state;
    return (
      <div>
        {this.state.salon
          ? <div>
              <Typography>Name: {salon.name}</Typography>
              <hr />
              <div>
                <h2>Staffs</h2>
                {this.state.staffs.map (staff => (
                  <li key={staff.id}>
                    <span>{staff.first_name}{' '}{staff.last_name}</span>
                    <button
                      onClick={() => {
                        this.props.history.push (
                          `/salon/${this.state.salon.id}/staff/${staff.id}`
                        );
                      }}
                    >
                      Edit
                    </button>
                  </li>
                ))}
                <Link to={`/salon/${salon.id}/staff/create`}>
                  <Button>Add Staff</Button>
                </Link>
              </div>
            </div>
          : <div>Loading</div>}
      </div>
    );
  }
}

export default SalonPage;
