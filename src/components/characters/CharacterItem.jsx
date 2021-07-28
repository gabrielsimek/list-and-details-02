import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './CharacterItem.css';
const CharacterItem = ({ name, image, _id }) => {

  return (
    <Link to={`/character/${_id}`}> 
      <figure className="CharacterItem">
        <img 
          src={image}/>
        <figcaption>
          <h1>{name}</h1>
        </figcaption>
      </figure>
    </Link>
  );
 
};

CharacterItem.propTypes = {
  name: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  _id: propTypes.string.isRequired
};

export default CharacterItem;
