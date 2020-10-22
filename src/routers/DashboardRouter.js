import React from 'react';
import Navbar from '../components/ui/Navbar';
import DcScreen from '../components/dc/DcScreen';
import { Route, Switch, Redirect } from "react-router-dom";
import MarvelScreen from '../components/marvel/MarvelScreen';
import HeroesScreen from '../components/heroes/HeroesScreen';
import SearchScreen from '../components/search/SearchScreen';

export const DashboardRouter = () => {
  return <>
    <Navbar />
    <div className='container'>
      <Switch>
        <Route exact path="/dc" component={DcScreen} />
        <Route exact path="/search" component={SearchScreen} />
        <Route exact path="/marvel" component={MarvelScreen} />
        <Route exact path="/hero/:heroeId" component={HeroesScreen} />
        <Redirect to="/marvel" />
      </Switch>
    </div>
  </>
};
