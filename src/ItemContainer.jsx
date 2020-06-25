import React from 'react';

import { useSelector } from 'react-redux';

import Item from './Item';

export default function ItemContainer() {
  const { task } = useSelector((state) => ({
    task: state.task,
  }));

  return (
    <Item task={task} />
  );
}
