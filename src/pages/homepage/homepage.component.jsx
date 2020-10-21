import React from 'react';

import TaskList from '../../components/task-list/task-list.component';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import './homepage.styles.scss';

const HomePage = () => {
  return (
    <div className='home'>
      <TaskList />
      <form>
        <FormInput 
          name="title"  
          value=''
          handleChange
          label="title"
          required
        />
        <FormInput 
          name="description"  
          value=''
          handleChange
          label="description"
        />
        <CustomButton type="submit"> Add New Task </CustomButton>
      </form>
    </div>
  )};

export default HomePage;