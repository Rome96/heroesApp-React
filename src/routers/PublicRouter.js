import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

// ...rest = demas datos como exact, path, etc
export const PublicRouter = ({ isAuthenticated, component: Component, ...rest }) => {
  
  return <Route 
    {...rest}
    component={(props) => (
      !isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    )}
  />
};

PublicRouter.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
};

