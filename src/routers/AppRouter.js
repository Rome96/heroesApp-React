import React, { useContext } from 'react';
import { DashboardRouter } from './DashboardRouter';
import LoginScreen from '../components/login/LoginScreen';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { PrivateRouter } from './PrivateRouter';
import { AuthContext } from '../components/auth/AuthContext';

export const AppRouter = () => {
  const { user:{logged} } = useContext(AuthContext)
  console.log(logged);
  return <Router>
    <div>
      <Switch>
        <Route exact path="/login" component={LoginScreen} />
        <PrivateRouter path="/" component={DashboardRouter} isAuthenticated={logged} />
      </Switch>
    </div>
  </Router>
};
