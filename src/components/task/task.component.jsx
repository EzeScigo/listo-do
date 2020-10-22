import React from 'react';

import { TaskCardContainer, TaskRemover } from './task.styles';

const TaskCard = ({ title, desc }) => {
  return (
    <TaskCardContainer>
      <TaskRemover>X</TaskRemover>
      <h1>{ title }</h1>
      <p>{ desc }</p>
    </TaskCardContainer>
  )
};

export default TaskCard;