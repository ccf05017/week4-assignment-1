import React from 'react';

import { render } from '@testing-library/react';

import ItemContainer from './ItemContainer';

test('ItemContainer', () => {
  const { getByText } = render((
    <ItemContainer />
  ));

  expect(getByText(/완료/)).not.toBeNull();
});
