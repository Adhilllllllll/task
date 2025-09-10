import { createSelector} from "reselect";

const selectTaskState=(state)=>state.todos;

export const selectAllTasks=createSelector(
    [selectTaskState],
    (todos)=>todos.tasks
);