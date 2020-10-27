import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

// ...rest = demas datos como exact, path, etc
export const PrivateRouter = ({ isAuthenticated, component: Component, ...rest }) => {

  const pathname = rest.location.pathname;
  localStorage.setItem('lastPath', pathname)

  return <Route 
    {...rest}
    component={(props) => (
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    )}
  />
};

PrivateRouter.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
};

