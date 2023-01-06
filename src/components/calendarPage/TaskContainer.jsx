import React, { useState, useEffect } from "react";
import Task from "./TaskItem";
import "../../styles/tasksList.css";
import AddTask from "./AddTaskButton";
import { useSelector } from "react-redux";
import { selectDate } from "../../store/dateReducer";
import { selectUserData } from "../../store/userDataReducer";

function TaskContainer() {
  const { date } = useSelector(selectDate);
  const { data } = useSelector(selectUserData);
  const [tasks, setTasks] = useState([]);
  const [OpenPopup, setOpenPopup] = useState(false);

  useEffect(() => {
    if (data && Object.prototype.hasOwnProperty.call(data, date)) {
      setTasks(Object.values(data[date]));
    } else {
      setTasks([]);
    }
  }, [data, date]);

  return (
    <div>
      <AddTask OpenPopup={OpenPopup} setOpenPopup={setOpenPopup} />
      <div className="tasks__container">
        {tasks.length
          ? tasks.map((task) => (
              <Task
                OpenPopup={OpenPopup}
                setOpenPopup={setOpenPopup}
                key={task.taskId}
                userData={task}
              />
            ))
          : ""}
      </div>
    </div>
  );
}

export default TaskContainer;
