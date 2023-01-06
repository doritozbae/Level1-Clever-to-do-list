import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../context/AuthContext";
import { selectDate } from "../../store/dateReducer";
import { setTaskData } from "../../store/addTaskReducer";
import { deleteTaskFromDB } from "../../database/deleteTask";
import { openTask } from "../../store/taskReducer";
import { editTask } from "../../database/editTask";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import { indigo } from "@mui/material/colors";

import "../../styles/tasks.css";

function Task({ userData, setOpenPopup }) {
  const dispatch = useDispatch();
  const { date } = useSelector(selectDate);
  const { id } = useAuth();
  const { task, description, taskId, isDone } = userData;

  const [TaskStatus, setTaskStatus] = useState(isDone);
  const [DescriptionInfo, OpenDescriptionInfo] = useState(false);

  const toggleDescription = () => {
    if (DescriptionInfo == false) {
      OpenDescriptionInfo(true);
    } else OpenDescriptionInfo(false);
  };

  const toggleTaskStatus = async () => {
    try {
      await editTask(id, taskId, date, task, description, !TaskStatus);
      setTaskStatus(!TaskStatus);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTask = async () => {
    try {
      await deleteTaskFromDB(id, taskId, date);
    } catch (err) {
      console.log(err.message);
    }
  };

  const editTaskBtn = () => {
    setOpenPopup(true);
    const taskFilled = {
      task,
      description,
      taskId: taskId,
      userId: id,
      taskDate: date,
      isDone: TaskStatus, 
      popupStyle: false,
    };
    dispatch(setTaskData({ taskFilled }));
  };

  const infoAboutTask = () => {
    toggleDescription();
    const taskData = {
      task,
      description,
      taskId: taskId,
      userId: id,
      taskDate: date,
      isDone: TaskStatus,
    };
    dispatch(openTask({ taskData }));
  };

  return (
    <>
      <div className="taskContent">
        <div className="taskContent_main">
          <div className="taskContent__name">
            <div
              onClick={toggleTaskStatus}
              className={TaskStatus ? "taskCheckbox doneTask" : "taskCheckbox"}
            ></div>
            <div>
              <p className={TaskStatus ? "doneTask__font" : ""}> {task}</p>
            </div>
          </div>
          <div className="taskIcons">
            <div className="icon" onClick={infoAboutTask}>
              <InfoOutlinedIcon sx={{ color: indigo[200] }} />
            </div>
            <div className="icon" onClick={editTaskBtn}>
              <ModeEditIcon sx={{ color: indigo[200] }} />
            </div>
            <div className="icon" onClick={deleteTask}>
              <DeleteOutlineRoundedIcon sx={{ color: indigo[200] }} />
            </div>
          </div>
        </div>
        <p
          className={
            DescriptionInfo ? "descriptionSection" : "descriptionSection hide"
          }
        >
          {description}
        </p>
      </div>
    </>
  );
}

export default Task;
