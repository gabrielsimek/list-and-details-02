import React from 'react';
import propTypes from 'prop-types';

const CharacterItem = ({ name, image }) => {
  return <figure>
    <img 
      src={image}/>
    <figcaption>
      <h1>{name}</h1>
    </figcaption>
  </figure>;
 
};

CharacterItem.propTypes = {
  name: propTypes.string.isRequired,
  image: propTypes.string.isRequired
};

export default CharacterItem;
