import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Item from './Item';

import { deleteTask } from './actions';

export default function ItemContainer() {
  const dispatch = useDispatch();

  const { task } = useSelector((state) => ({
    task: state.task,
  }));

  function onClickDelete(id) {
    dispatch(deleteTask(id));
  }

  return (
    <Item task={task} onClickDelete={onClickDelete} />
  );
}
