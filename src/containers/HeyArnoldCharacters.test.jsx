import React from 'react';
import { render, screen } from '@testing-library/react';
import HeyArnoldCharacters
  from './HeyArnoldCharacters';
import { MemoryRouter } from 'react-router-dom';


describe('Hey Arnold Character Container', () => {
  it('renders a list of hey arnold character images and names', async () => {
    
    render(<MemoryRouter><HeyArnoldCharacters/></MemoryRouter>);

    screen.getByText('Loading...');
    const ul = await screen.findByRole('list');
    expect(ul).not.toBeEmptyDOMElement();

  });
});
