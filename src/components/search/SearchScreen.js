import React, { useMemo } from 'react'
import queryString from 'query-string';
import HeroCard from '../heroes/HeroCard';
import { useForm } from '../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../selectors/getHeroesByName';
import { heroes } from '../data/heroes';

const SearchScreen = ({history}) => {
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  const [values, handleInputChange] = useForm({ searchText: q })
  const { searchText } = values;

  const handleSubmit = e => {
    e.preventDefault()
    history.push(`?q=${searchText}`)
  };

  const heroe = useMemo(() => getHeroesByName(q), [q])

  return <div className="row mt-5">
    <div className="col-5">
      <h4>Search Form</h4> <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchText"
          value={searchText}
          autoComplete="off"
          className="form-control"
          placeholder="Find your hero"
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="btn m-1 btn-block btn-outline-primary"
        >
          Search...
        </button>
      </form>
    </div>
    <div className="col-7">
      <h4>Results</h4> <hr />

      { (q === '') && <div className="alert alert-info">Search a hero</div> }

      {
        (q !== '' && heroe.length === 0) && <div className="alert alert-danger">
          There is no a hero with {q}
        </div> 
      }

      { heroe.map((hero) =>  <HeroCard key={hero.id} {...hero} /> ) }
    </div>
  </div>
}

export default SearchScreen
