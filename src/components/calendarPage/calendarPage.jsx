import React from "react";
import CalendarHeader from "./calendarHeader";
import Calendar from "./calendar";
import "../../styles/calendarContent.css";
import TaskContainer from "./TaskContainer";

function CalendarPage() {
  return (
    <div>
      <CalendarHeader />
      <div className="calendarContent">
        <Calendar />
        <TaskContainer />
      </div>
    </div>
  );
}

export default CalendarPage;
