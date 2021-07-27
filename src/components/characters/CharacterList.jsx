import React from 'react';
import PropTypes from 'prop-types';
import CharacterItem from './CharacterItem';

const CharacterList = ({ id, name, image }) => {
  return <ul><CharacterItem/></ul>;
};

export default CharacterList;

CharacterList.PropTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  )
};
