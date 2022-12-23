import React from "react";
import Calendar from "./calendar";
import "../../styles/calendarContent.css";
import TasksList from "./TasksList";
import AddTask from "./AddTaskButton";

function CalendarContent() {
  return (
    <div className="calendarContent">
      <Calendar />
      <AddTask />
      <TasksList />
    </div>
  );
}

export default CalendarContent;
