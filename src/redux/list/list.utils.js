export const addTaskToList = (listTasks, taskToAdd) => {
  const newId = `${listTasks.length}`;
  const currentDate = new Date();
  const time = `${currentDate.getUTCHours()}:${currentDate.getUTCMinutes()}:${currentDate.getUTCMinutes()}`;
  const day = `${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`;
  const date = `@ ${time} - ${day}`;
  return [ ...listTasks, {...taskToAdd, id: newId, date: date}];
};

export const removeTaskFromList = (listTasks, taskToRemove) => {
  return listTasks.filter(task => 
    task.id !== taskToRemove.id)
};

export const updateExistingTask = (listTasks, taskToUpdate) => {
  // const previousTask = listTasks.find(task => task.id === taskToUpdate.id);
  return listTasks.map(task => 
    task.id === taskToUpdate.id
      ? { ...task, title: taskToUpdate.title }
      : task
    );
};