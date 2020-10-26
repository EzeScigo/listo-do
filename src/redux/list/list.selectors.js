import { createSelector } from 'reselect';

export const selectList = state => state.list;

export const selectTasks = createSelector(
  [selectList],
  (list) => list.tasks
)