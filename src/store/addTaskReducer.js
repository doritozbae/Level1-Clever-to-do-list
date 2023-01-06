import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskFilled: {
    task: "",
    description: "",
    taskId: null,
    userId: null,
    taskDate: null,
    isDone: false,
    popupStyle: true,
  },
};

const addTaskSlice = createSlice({
  name: "taskFilled",
  initialState,
  reducers: {
    setTaskData(state, action) {
      state.taskFilled = action.payload.taskFilled;
    },
    closeTask() {
      return initialState;
    },
  },
});

export const { setTaskData, closeTask } = addTaskSlice.actions;
export const selectTaskData = (state) => state.addTask;
export default addTaskSlice.reducer;
