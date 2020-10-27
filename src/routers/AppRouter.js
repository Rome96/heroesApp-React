import React, { useContext } from 'react';
import LoginScreen from '../components/login/LoginScreen';
import { AuthContext } from '../components/auth/AuthContext';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import { PublicRouter, PrivateRouter, DashboardRouter } from "./index";

export const AppRouter = () => {
  const { user:{logged} } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRouter
            exact
            path="/login"
            component={LoginScreen}
            isAuthenticated={logged}
          />
          <PrivateRouter
            path="/"
            isAuthenticated={logged}
            component={DashboardRouter}
          />
        </Switch>
      </div>
    </Router>
  );
};
