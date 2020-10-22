import ListActionTypes from './list.type';

// import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const addTaskToList = task => ({
  type: ListActionTypes.ADD_TASK,
  payload: task
});