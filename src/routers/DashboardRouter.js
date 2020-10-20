import React from 'react';
import Navbar from '../components/ui/Navbar';
import DcScreen from '../components/dc/DcScreen';
import { Route, Switch, Redirect } from "react-router-dom";
import MarvelScreen from '../components/marvel/MarvelScreen';
import HeroesScreen from '../components/heroes/HeroesScreen';

export const DashboardRouter = () => {
  return <>
    <Navbar />
    <div>
      <Switch>
        <Route exact path="/marvel" component={MarvelScreen} />
        <Route exact path="/heroe/:heroeId" component={HeroesScreen} />
        <Route exact path="/dc" component={DcScreen} />
        <Redirect to="/marvel" />
      </Switch>
    </div>
  </>
};
