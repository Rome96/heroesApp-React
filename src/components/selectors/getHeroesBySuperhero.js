import { heroes } from "../data/heroes";

export const getHeroesBySuperhero = (superhero) => {
  return heroes.filter((hero) => hero.superhero === superhero);
};
