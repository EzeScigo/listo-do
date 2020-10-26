import React, { useState, useRef } from 'react';

import { updateTask } from '../../redux/list/list.actions';

import { connect } from 'react-redux';

const Editable = ({ taskID, text, type, placeholder, childRef, updateTask, ...props }) => {
  
  const inputRef = useRef(null);
  const [isEditing, setEditing] = useState(false);

  const [newTask, setNewTask] = useState({
    id: `${taskID}`,
    title: `${text}`,
  });

  const handleChange = event => {
    const { value, name } = event.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleOnBlur = () => {
    updateTask(newTask);
    setEditing(!isEditing);
  }

  return (
    <div>
      {
        isEditing ? (
          <div 
            onBlur={() => handleOnBlur()}
            >
            <input
              name='title'
              ref={ inputRef }
              value={ newTask.title }
              type="text"
              onChange={ e => handleChange(e) } >
            </input>
          </div>
        ) : (
          <div onClick={() => setEditing(!isEditing)}>
            <h1>{ newTask.title }</h1>
          </div>
        )
      };
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  updateTask: newTask => dispatch(updateTask(newTask))
});

export default connect(null, mapDispatchToProps)(Editable);