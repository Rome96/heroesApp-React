import React from 'react';
import { Link } from 'react-router-dom';

const HeroCard = data => {
  const { id, superhero, alter_ego, first_appearance, characters } = data

  return <div className="card ms-3" style={{maxWidth: 440}}>
    <div className="row no-gutters">
      <div className="col-md-4">
        <img
          alt={superhero}
          className="card-img-top"
          src={`./assets/heroes/${id}.jpg`}
        />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{ superhero }</h5>
          <p className="card-text">{ alter_ego }</p>
          {
            alter_ego !== characters && <p className='card-text'>{ characters }</p>
          }
          <p className="card-text">
            <small className="text-muted"> {first_appearance} </small>
          </p>
          <Link to={`./hero/${id}`}>
            Mas...
          </Link>
        </div>
      </div>
    </div>
  </div>
};

export default HeroCard;
