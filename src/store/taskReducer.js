import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskData: {
    task: "",
    description: "",
    taskId: null,
    userId: null,
    taskDate: null,
    isDone: false,
  },
};

const taskSlice = createSlice({
  name: "taskData",
  initialState,
  reducers: {
    openTask(state, action) {
      state.taskData = action.payload.taskData;
    },
    closeTask() {
      return initialState;
    },
  },
});

export const { openTask, closeTask } = taskSlice.actions;
export const selectTask = (state) => state.task;
export default taskSlice.reducer;
