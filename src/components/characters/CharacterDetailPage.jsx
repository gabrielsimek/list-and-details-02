import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { fetchCharacterById } from '../../services/HeyArnoldApi';

const CharacterDetailPage = ({ match, history }) => {
  const [character, setCharacter] = useState({});
  useEffect(async () =>  {
    const res = await fetchCharacterById(match.params.id);
    setCharacter(res);
  }, [1]);
  
  return <figure>
    <img 
      src={character.image}/>
    <figcaption>
      <h1>{character.name}</h1>
    </figcaption>
    <button onClick={() => onPress(history)}>Back</button>
  </figure>;
 
};

CharacterDetailPage.propTypes = {
  match: propTypes.object.isRequired,
  history: propTypes.object.isRequired
};

export default CharacterDetailPage;

const onPress = (history) => {
  history.push('/');
};
