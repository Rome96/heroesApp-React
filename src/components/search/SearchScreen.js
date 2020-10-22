import React from 'react'
import HeroCard from '../heroes/HeroCard';
import { useForm } from '../hooks/useForm';

const SearchScreen = () => {
  const [values, handleInputChange, reset] = useForm({ searchText: '' })
  const { searchText } = values;

  const handleSubmit = e => {
    e.preventDefault()
    console.log(searchText);
  };

  const turi = []

  return (
    <div>
      <h2>Seach..</h2> <hr />
      <div className="row">
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
          {turi.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchScreen
