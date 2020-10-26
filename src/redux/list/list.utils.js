export const addTaskToList = (listTasks, taskToAdd) => {
  const newId = listTasks.length + 1;
  const currentDate = new Date();
  const time = `${currentDate.getUTCHours()}:${currentDate.getUTCMinutes()}:${currentDate.getUTCMinutes()}`;
  const day = `${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`;
  const date = `@ ${time} - ${day} `;
  return [ ...listTasks, {...taskToAdd, id: newId, date: date}];
};

export const removeTaskFromList = (listTasks, taskToRemove) => {
    return listTasks.filter(task => 
      task.id !== taskToRemove.id)
};