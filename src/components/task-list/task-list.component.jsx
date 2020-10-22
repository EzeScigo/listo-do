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
          <TaskCard title={task.title} desc={task.desc} />
        ))) : (
          <p>No hay tareas.</p>
        )
      }
      <TaskCard title='Task 1' desc='sadjiasd saijdsa osakoidsa isadoisa oksad.' />
      <TaskCard title='Task 2' desc='sadsa sads aasd sadsad' />
      <TaskCard title='Task 3' desc='dsjfsad dsasa sa dsasa sada'/>
    </TaskContainer>
  )
};

const mapStateToProps = (state) => ({
  tasks: selectTasks(state)
})

export default connect(mapStateToProps, null)(TaskList);