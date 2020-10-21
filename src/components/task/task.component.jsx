import React from 'react';

import { TaskCardContainer } from './task.styles';

const TaskCard = ({ title, desc }) => {
  return (
    <TaskCardContainer>
      <h1>{ title }</h1>
      <p>{ desc }</p>
    </TaskCardContainer>
  )
};

export default TaskCard;