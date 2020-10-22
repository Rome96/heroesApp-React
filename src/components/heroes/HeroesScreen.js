import React from 'react'
import { useParams, Redirect } from 'react-router-dom';
import { getHeroById } from '../selectors/getHeroById';

const HeroesScreen = () => {
  const { heroeId } = useParams();
  const hero = getHeroById(heroeId)

  if (!hero) {
    return <Redirect to='/' />
  }

  const { superhero, alter_ego, first_appearance, characters } = hero

  console.log(superhero)
  return (
    <div>
      <h3>Heroes Screen</h3>
    </div>
  );
};

export default HeroesScreen;