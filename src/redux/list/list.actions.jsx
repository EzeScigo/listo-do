import ListActionTypes from './list.type';

// import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const addTaskToList = task => ({
  type: ListActionTypes.ADD_TASK,
  payload: task
});

export const clearList = () => ({
  type: ListActionTypes.CLEAR_LIST,
});

export const removeTaskFromList = task => ({
  type: ListActionTypes.REMOVE_TASK,
  payload: task
});