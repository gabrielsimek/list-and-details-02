import React from 'react';
import propTypes from 'prop-types';

const CharacterItem = ({ name, image }) => {
  return <li><figure>
    <img 
      src="https://vignette.wikia.nocookie.net/heyarnold/images/2/2e/Miles.jpg/revision/latest/scale-to-width-down/243?cb=20101115140639"/>
    <figcaption>
      <h1>Miles Shortman</h1>
    </figcaption>
  </figure>
  </li>;
};

CharacterItem.propTypes = {
  name: propTypes.string.isRequired,
  img: propTypes.string.isRequired
};

export default CharacterItem;
