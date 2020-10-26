import React, { useRef, useState } from 'react';

import { connect } from 'react-redux';

import { removeTaskFromList } from '../../redux/list/list.actions';

import Editable from '../editable/editable.component';

import { TaskCardContainer, TaskRemover } from './task.styles';

const TaskCard = ({ task, removeTask }) => {
  const { title, description, date } = task;

  return (
    <TaskCardContainer>
      <TaskRemover onClick={() => removeTask(task) }>
        Remove
      </TaskRemover>
      <Editable
        taskID={ task.id } 
        text={ title }
        type="input"
        >
      </Editable>
      { (description.length) ? <p>{description}</p> : null }
      <footer>{ date }</footer>
    </TaskCardContainer>    
  );
};

const mapDispatchToProps = dispatch => ({
  removeTask: task => dispatch(removeTaskFromList(task))
});

export default connect(null, mapDispatchToProps)(TaskCard);