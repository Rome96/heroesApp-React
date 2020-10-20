import React from 'react';
import { DashboardRouter } from './DashboardRouter';
import LoginScreen from '../components/login/LoginScreen';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

export const AppRouter = () => {
  return <Router>
    <div>
      <Switch>
        <Route exact path="/login" component={LoginScreen} />
        <Route path="/" component={DashboardRouter} />
      </Switch>
    </div>
  </Router>
};
