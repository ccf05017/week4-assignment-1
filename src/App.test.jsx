import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const tasks = [
    { id: 1, title: 'Task-1' },
    { id: 2, title: 'Task-2' },
  ];

  useSelector.mockImplementation((selector) => selector({
    tasks,
    taskTitle: '',
  }));

  const { getByText } = render((
    <App />
  ));

  expect(getByText(/Task-1/)).not.toBeNull();
  expect(getByText(/Task-2/)).not.toBeNull();
});
