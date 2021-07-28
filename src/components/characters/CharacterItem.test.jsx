import React from 'react';
import { render } from '@testing-library/react';

import CharacterItem from './CharacterItem';


describe('App component', () => {
 
  it('renders App', () => {
    const { asFragment } = render(
      <CharacterItem 
        name="Mitzi"
        image="https://vignette.wikia.nocookie.net/heyarnold/images/d/d9/Mitzi.png/revision/latest/scale-to-width-down/310?cb=20171212070331"
      />);
    expect(asFragment()).toMatchSnapshot();
  });
});
