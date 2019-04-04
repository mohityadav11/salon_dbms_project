import React from 'react';

import SalonForm from '../components/SalonForm';
import {isAuthenticated} from '../../helpers/auth.helper';
import {create} from '../../api/salon.api';

class AddSalonPage extends React.Component {
  onSubmit = salon => {
    const {token} = isAuthenticated ();

    create (salon, token);
  };

  render () {
    return (
      <SalonForm
        title={'Create Salon'}
        onSubmit={salon => {
          this.onSubmit (salon);
        }}
      />
    );
  }
}

export default AddSalonPage;
