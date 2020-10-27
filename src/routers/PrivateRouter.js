import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRouter = ({
  isAuthenticated,
  component: Component,
  ...rest // demas datos como exact, path, etc
}) => {
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

