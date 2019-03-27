import React from 'react';

import {list} from '../../api/salon.api';
import {isAuthenticated} from '../../helpers/auth.helper';
import Item from '../components/Item';

class HomePage extends React.Component {
  state = {
    salons: [],
  };

  componentDidMount () {
    const {token} = isAuthenticated ();

    list (token, 2).then (salons => {
      this.setState (() => ({salons}));
    });
  }

  render () {
    return (
      <div>
        {this.state.salons.map (salon => <Item key={salon.id} salon={salon} />)}
      </div>
    );
  }
}

export default HomePage;
