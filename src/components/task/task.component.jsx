import React from 'react';

import { connect } from 'react-redux';

import { selectTasks } from '../../redux/list/list.selectors';
import { removeTaskFromList } from '../../redux/list/list.actions';

import { TaskCardContainer, TaskRemover } from './task.styles';

const TaskCard = ({ task, removeTask }) => {
  const { title, description, date } = task;
  return (
    <TaskCardContainer>
      <TaskRemover onClick={() => removeTask(task) }>
        Remove
      </TaskRemover>
      <h1>{ title }</h1>
      { (description.length) ? <p>{description}</p> : null }
      <footer>{ date }</footer>
    </TaskCardContainer>
  )
};

const mapDispatchToProps = dispatch => ({
  removeTask: task => dispatch(removeTaskFromList(task))
});

export default connect(null, mapDispatchToProps)(TaskCard);