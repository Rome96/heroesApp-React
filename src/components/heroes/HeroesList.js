import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../selectors/getHeroesByPublisher';
import HeroCard from './HeroCard';

const HeroesList = ({ publisher  }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])
  return (
    <div className="card-columns">
      {
        heroes.map(data => (
          <HeroCard
            key={data.id}
            {...data}
          />
        ))
      }
    </div>
  );
};

export default HeroesList;
