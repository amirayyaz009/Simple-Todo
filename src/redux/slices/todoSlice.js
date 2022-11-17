import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const counterSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: new Date().valueOf(),
        title: action.payload,
      });
    },
    deleteTodo: (state, action) => {
      const filtered = state.todos.filter((t) => t.id !== action.payload.id);
      state.todos = filtered;
    },
    updateTodo: (state, action) => {
      const updated = state.todos.map((td) =>
        td.id === action.payload.id ? action.payload : td
      );
      state.todos = updated;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = counterSlice.actions;
export default counterSlice.reducer;
