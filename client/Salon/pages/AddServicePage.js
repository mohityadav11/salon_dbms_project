import React from 'react';

import ServiceForm from '../components/ServiceForm';
import {isAuthenticated} from '../../helpers/auth.helper';
import {create} from '../../api/service.api';

class AddServicePage extends React.Component {
  onSubmit = service => {
    const {token} = isAuthenticated ();

    create (token, service);
  };

  render () {
    return (
      <ServiceForm
        onSubmit={service => {
          this.onSubmit (service);
        }}
        salonId={this.props.match.params.salonId}
      />
    );
  }
}

export default AddServicePage;
