import React from 'react';
import propTypes from 'prop-types';
import CharacterItem from './CharacterItem';

const CharacterList = ({ id, name, image }) => {
  return <ul><CharacterItem/></ul>;
};

export default CharacterList;

CharacterList.propTypes = {
  characters: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      image: propTypes.string.isRequired
    })
  )
};
