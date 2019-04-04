import React from 'react';

import {list} from '../../api/salon.api';
import {isAuthenticated} from '../../helpers/auth.helper';

import SalonItem from '../components/SalonItem';

class SalonListPage extends React.Component {
  state = {
    salons: [],
  };

  componentDidMount () {
    const {token} = isAuthenticated ();

    list (token).then (salons => {
      this.setState (() => ({salons}));
    });
  }

  render () {
    return (
      <div>
        {this.state.salons.map (salon => (
          <SalonItem key={salon.id} salon={salon} />
        ))}
      </div>
    );
  }
}

export default SalonListPage;
