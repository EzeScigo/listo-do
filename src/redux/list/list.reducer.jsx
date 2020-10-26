import ListActionTypes from './list.type';
import { addTaskToList, removeTaskFromList } from './list.utils';

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
      }
    default:
      return state;
  }
};

export default ListReducer;