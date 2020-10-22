import { createSelector } from 'reselect';

const selectList = state => state.list;

export const selectTasks = createSelector(
  [selectList],
  (list) => list.tasksList
);