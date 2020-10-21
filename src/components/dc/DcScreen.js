import React from 'react'
import HeroesList from '../heroes/HeroesList'

const DcScreen = () => {
  return (
    <div>
      <h3>Dc Screen</h3> <hr/>
      <HeroesList publisher='DC Comics' />
    </div>
  );
};

export default DcScreen;