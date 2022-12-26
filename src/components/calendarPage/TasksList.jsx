import React from "react";
import Task from "./TaskItem";
import "../../styles/tasksList.css";

function TasksList() {
  return (
    <div className="tasks__container">
      <Task />
      <Task />
    </div>
  );
}

export default TasksList;
