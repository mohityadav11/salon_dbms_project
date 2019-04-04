import React from 'react';

import StaffForm from '../components/StaffForm';
import {read, update} from '../../api/staff.api';
import {isAuthenticated} from '../../helpers/auth.helper';

class UpdateStaffUpdate extends React.Component {
  state = {
    staff: null,
    salonId: null,
    staffId: null,
  };

  componentDidMount () {
    const {salonId, staffId} = this.props.match.params;
    const {token} = isAuthenticated ();

    console.log ('salonId', salonId);
    console.log ('staffId', staffId);

    read (token, staffId).then (staff => {
      this.setState (() => ({staff, salonId, staffId}));
    });
  }

  onSubmit = staff => {
    const {token} = isAuthenticated ();
    update (token, this.state.staffId, staff);
  };

  render () {
    return (
      <div>
        {this.state.staff &&
          <StaffForm
            title={'Update Staff'}
            staff={this.state.staff}
            salonId={this.state.salonId}
            onSubmit={staff => {
              this.onSubmit (staff);
            }}
          />}
      </div>
    );
  }
}

export default UpdateStaffUpdate;
