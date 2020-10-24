import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';

const Navbar = () => {
  const history = useHistory();
  const { user: {name}, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    history.replace('/login');
    dispatch({
      type: types.logout
    });
  }; 

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>
      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            exact
            to="/marvel"
            activeClassName="active"
            className="nav-item nav-link"
          >
            Marvel
          </NavLink>

          <NavLink
            exact
            to="/dc"
            activeClassName="active"
            className="nav-item nav-link"
          >
            DC
          </NavLink>
          <NavLink
            exact
            to="/search"
            activeClassName="active"
            className="nav-item nav-link"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-info">{ name }</span>
          <button
            onClick={handleLogout}
            className="nav-item nav-link btn"
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
