import { configureStore } from "@reduxjs/toolkit";
import dateReducer from "./dateReducer";
import userReducer from "./userReducer";
import addTaskReducer from "./addTaskReducer";
import taskReducer from "./taskReducer";
import userDataReducer from "./userDataReducer";

export const store = configureStore({
  reducer: {
    date: dateReducer,
    user: userReducer,
    data: userDataReducer,
    addTask: addTaskReducer,
    task: taskReducer,
  },
});
