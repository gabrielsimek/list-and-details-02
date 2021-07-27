import React from 'react';
import { render, screen } from '@testing-library/react';
import HeyArnoldCharacters
  from './HeyArnoldCharacters';
import expectExport from 'expect';

describe('Hey Arnold Character Container', () => {
  it('renders a list of hey arnold character images and names', async () => {
    render(<HeyArnoldCharacters/>);

    screen.getByText('Loading...');
    const ul = await screen.findByRole('list');
    expectExport(ul).not.toBeEmptyDOMElement();

  });
});
