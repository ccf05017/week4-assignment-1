import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ItemContainer from './ItemContainer';

jest.mock('react-redux');

describe('ItemContainer', () => {
  it('can see component', () => {
    const title = '아무것도 안하기';

    const task = {
      id: 100,
      title,
    };

    useSelector.mockImplementation((selector) => selector({
      task,
    }));

    const { getByText } = render((
      <ItemContainer />
    ));

    expect(getByText(/완료/)).not.toBeNull();
    expect(getByText(title)).not.toBeNull();
  });
});
