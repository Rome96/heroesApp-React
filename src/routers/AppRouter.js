import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import Navbar from '../components/ui/Navbar';
import LoginScreen from '../components/login/LoginScreen';
import MarvelScreen from '../components/marvel/MarvelScreen';

export const AppRouter = () => {
  return <Router>
    <div>
     <Navbar />
      <Switch>
        <Route exact path="/" component={MarvelScreen} />
        <Route exact path="/login" component={LoginScreen} />
      </Switch>
    </div>
  </Router>
};
