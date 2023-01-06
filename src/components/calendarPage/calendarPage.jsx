import React from "react";
import CalendarHeader from "./CalendarHeader";
import Calendar from "./Calendar";
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
