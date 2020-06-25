import React from 'react';

import { render } from '@testing-library/react';

import ItemContainer from './ItemContainer';

describe('ItemContainer', () => {
  it('can see component', () => {
    const { getByText } = render((
      <ItemContainer />
    ));

    expect(getByText(/완료/)).not.toBeNull();
  });
});
