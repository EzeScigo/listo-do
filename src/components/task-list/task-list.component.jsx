import React from 'react';

import { connect } from 'react-redux';
import { selectTasks } from '../../redux/list/list.selectors';

import TaskCard from '../task/task.component';

import { TaskContainer } from './task-list.container';

const TaskList = ({ tasks }) => {
  return (
    <TaskContainer>
      {tasks.length ?
        (tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))) : (
          <p>No tasks pending.</p>
        )
      }
    </TaskContainer>
  )
};

const mapStateToProps = (state) => ({
  tasks: selectTasks(state)
})

export default connect(mapStateToProps, null)(TaskList);