import ListActionTypes from './list.type';
import { addTaskToList, removeTaskFromList, updateExistingTask } from './list.utils';

const INITIAL_STATE = {
  tasks: [],
};

const ListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ListActionTypes.ADD_TASK:
      return {
        ...state,
        tasks: addTaskToList(state.tasks, action.payload)
      };
    case ListActionTypes.CLEAR_LIST:
      return {
        ...state,
        tasks: []
      };
    case ListActionTypes.REMOVE_TASK:
      return {
        ...state,
        tasks: removeTaskFromList(state.tasks, action.payload)
      };
    case ListActionTypes.UPDATE_TASK:
      return {
        ...state,
        tasks: updateExistingTask(state.tasks, action.payload)
      };
    default:
      return state;
  }
};

export default ListReducer;