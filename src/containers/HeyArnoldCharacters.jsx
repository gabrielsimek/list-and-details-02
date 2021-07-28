import React, { Component } from 'react';
import CharacterList from '../components/characters/CharacterList';
import { fetchCharacters } from '../services/HeyArnoldApi';

export default class HeyArnoldCharacters extends Component {
  async componentDidMount() {
    const res = await fetchCharacters();
    console.log(res);
  }
  
  render() {
    return <CharacterList/>;  
  }
}
