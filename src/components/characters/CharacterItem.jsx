import React from 'react';
import PropTypes from 'prop-types';

const CharacterItem = ({ name, image }) => {
  return <figure>
    <img 
      src="https://vignette.wikia.nocookie.net/heyarnold/images/2/2e/Miles.jpg/revision/latest/scale-to-width-down/243?cb=20101115140639"/>
    <figcaption>
      <h1>Miles Shortman</h1>
    </figcaption>
  </figure>;
};

CharacterItem.PropTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export default CharacterItem;
