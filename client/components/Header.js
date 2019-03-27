import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
  <div>
    <Link to="/signup">Signup</Link>
    <Link to="/login">Login</Link>
    <Link to="/salon/create">Create Salon</Link>
  </div>
);

export default Header;
