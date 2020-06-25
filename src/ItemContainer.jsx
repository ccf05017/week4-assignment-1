import React from 'react';

import { useSelector } from 'react-redux';

export default function ItemContainer() {
  const { task } = useSelector((state) => ({
    task: state.task,
  }));

  return (
    <div>
      <div>
        완료
      </div>
      <div>
        {task.title}
      </div>
    </div>
  );
}
