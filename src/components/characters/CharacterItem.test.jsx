import React from 'react';
import { render } from '@testing-library/react';

import CharacterItem from './CharacterItem';
import { MemoryRouter } from 'react-router-dom';


describe('App component', () => {
 
  it('renders App', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <CharacterItem 
          name="Mitzi"
          image="https://vignette.wikia.nocookie.net/heyarnold/images/d/d9/Mitzi.png/revision/latest/scale-to-width-down/310?cb=20171212070331"
          _id="5da237699734fdcb7bef8f54"
        />
      </MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
});
