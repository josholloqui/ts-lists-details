import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import ListItem from './ListItem';
import { MemoryRouter } from 'react-router';

describe('ListItem component', () => {
  afterEach(() => cleanup());

  it('render ListItem', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <ListItem
          characters={[
            {
              char_id: 1,
              name: 'fred'
            },
            {
              char_id: 2,
              name: 'dave'
            }
          ]}
        />
      </MemoryRouter>
      
    );

    expect(asFragment()).toMatchSnapshot();
  })
})
