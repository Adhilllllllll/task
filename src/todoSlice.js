import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

let nextId = 1;

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ id: nextId++, text: action.payload });
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const { id, text } = action.payload;
      const task = state.tasks.find((t) => t.id === id);
      if (task) task.text = text;
    },
  },
});

export const { addTask, deleteTask, editTask } = todoSlice.actions;
export default todoSlice.reducer;
