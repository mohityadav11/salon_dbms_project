import React from 'react';
import {Link} from 'react-router-dom';

import Button from '@material-ui/core/Button';

import {read} from '../../api/salon.api';
import {list} from '../../api/staff.api';
import {listServices} from '../../api/service.api';
import {isAuthenticated} from '../../helpers/auth.helper';

class SalonPage extends React.Component {
  state = {
    salon: null,
    staffs: [],
    services: [],
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

    listServices (token, salonId).then (services => {
      this.setState (() => ({services}));
    });
  }

  render () {
    const {salon} = this.state;
    return (
      <div>
        {this.state.salon
          ? <div>
              <h2>Salon Details</h2>
              <p>Name: {salon.name}</p>
              <Link to={`/salon/${this.state.salon.id}/update`}>Edit</Link>
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
              <hr />
              <h2>Services</h2>
              {this.state.services.map (service => (
                <li key={service.id}>
                  <span>{service.name} - {service.cost}</span>
                  {/* <button
                    onClick={() => {
                      this.props.history.push (
                        `/salon/${this.state.salon.id}/staff/${staff.id}`
                      );
                    }}
                  >
                    Edit
                  </button> */}
                </li>
              ))}
              <Link to={`/salon/${salon.id}/service/create`}>Add service</Link>
            </div>
          : <div>Loading</div>}
      </div>
    );
  }
}

export default SalonPage;
