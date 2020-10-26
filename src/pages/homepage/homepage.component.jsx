import React, { useState } from 'react';

import { connect } from 'react-redux';
import { addTaskToList, clearList } from '../../redux/list/list.actions';

import TaskList from '../../components/task-list/task-list.component';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import './homepage.styles.scss';

const HomePage = ({ addTask, clearList }) => {
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    date: '',
  });

  const { title, description } = newTask;

  const handleSubmit = event => {
    event.preventDefault();

    addTask(newTask);
    setNewTask({
      title: '',
      description: '',
      date: ''});
  }

  const handleChange = event => {
    const { value, name } = event.target;

    setNewTask({ ...newTask, [name]: value });
  };

  return (
    <div className='home'>
      <TaskList />
      <form onSubmit={handleSubmit}>
        <FormInput 
          name="title"  
          value={title}
          handleChange={handleChange}
          label="Task title"
          required
        />
        <FormInput 
          name="description"  
          value={description}
          handleChange={handleChange}
          label="Task description"
        />
        <div className='buttons'>
          <CustomButton smallButton type="submit"> Add New Task </CustomButton>
          <CustomButton smallButton onClick={() => clearList()} > Clear List</CustomButton>
        </div>
      </form>
    </div>
  )};

const mapDispatchToProps = dispatch => ({
  addTask: newTask => dispatch(addTaskToList(newTask)),
  clearList: () => dispatch(clearList())
})

export default connect(null, mapDispatchToProps)(HomePage);