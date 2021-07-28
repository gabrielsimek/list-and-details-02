import React from 'react';
import propTypes from 'prop-types';
import './CharacterList.css';
import CharacterItem from './CharacterItem';
const CharacterList = ({ characters }) => {

  const characterItems = characters.map(character => {
    return <li key={character._id}>
      <CharacterItem 
        {...character}
      />
    </li>;
  });

  return <ul className="CharacterList">{characterItems}</ul>;
};

export default CharacterList;

CharacterList.propTypes = {
  characters: propTypes.arrayOf(
    propTypes.shape({
      _id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      image: propTypes.string.isRequired
    })
  )
};
