import React from 'react';

import TaskCard from '../task/task.component';

import { TaskContainer } from './task-list.container';

const TaskList = () => {
  return (
    <TaskContainer>
      <TaskCard title='Task 1' desc='sadjiasd saijdsa osakoidsa isadoisa oksad.' />
      <TaskCard title='Task 2' desc='sadsa sads aasd sadsad' />
      <TaskCard title='Task 3' desc='dsjfsad dsasa sa dsasa sada'/>
    </TaskContainer>
  )
};

export default TaskList;