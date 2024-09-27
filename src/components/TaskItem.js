import React from 'react';

const TaskItem = ({ task }) => {
  return (
    <li>
      <span>{task.title}</span>
      <span>{task.completed ? ' ✔️' : ' ❌'}</span>
    </li>
  );
};

export default TaskItem;
