import React, { useState } from 'react';

import { connect } from 'react-redux';
import { addTaskToList } from '../../redux/list/list.actions';

import TaskList from '../../components/task-list/task-list.component';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import './homepage.styles.scss';

const HomePage = ({ addTask }) => {
  const [newTask, setNewTask] = useState({
    title: '',
    description: '' 
  });

  const { title, description } = newTask;

  const handleChange = event => {
    const { value, name } = event.target;

    setNewTask({ ...newTask, [name]: value });
  };

  return (
    <div className='home'>
      <TaskList />
      <form onSubmit={() => addTask(newTask)}>
        <FormInput 
          name="title"  
          value={title}
          handleChange={handleChange}
          label="title"
          required
        />
        <FormInput 
          name="description"  
          value={description}
          handleChange={handleChange}
          label="description"
        />
        <CustomButton type="submit"> Add New Task </CustomButton>
      </form>
    </div>
  )};

const mapDispatchToProps = dispatch => ({
  addTask: newTask => dispatch(addTaskToList(newTask))
})

export default connect(null, mapDispatchToProps)(HomePage);