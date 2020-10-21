import React from 'react'
import HeroesList from '../heroes/HeroesList';

const MarvelScreen = () => {
  return (
    <div>
      <h3>Marvel screen</h3> <hr/>
      <HeroesList publisher='Marvel Comics' />
    </div>
  );
};

export default MarvelScreen;
