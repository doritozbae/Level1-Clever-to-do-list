import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useAuth } from "../../../context/AuthContext";
import { selectDate } from "../../../store/dateReducer";
import { selectTaskData } from "../../../store/addTaskReducer";
import { closeTask } from "../../../store/taskReducer";
import { deleteTaskFromDB } from "../../../database/deleteTask";
import { editTask } from "../../../database/editTask";
import { writeTask } from "../../../database/writeTask";

import "../../../styles/Popups/addTask.css";

// eslint-disable-next-line react/prop-types
function AddTaskPopup({ OpenPopup, setOpenPopup }) {
  const [taskName, setTask] = useState("");
  const [taskDescription, setDescription] = useState("");
  const [taskDateValue, setTaskDateValue] = useState(dayjs(new Date()));

  const dispatch = useDispatch();
  const { date } = useSelector(selectDate);
  const { id } = useAuth();

  const {
    taskFilled: { task, description, popupStyle, taskId, taskDate, isDone },
  } = useSelector(selectTaskData);

  const toggleModal = OpenPopup ? "show" : "hide";

  useEffect(() => {
    setTask(task);
    setDescription(description);
  }, [description, task]);

  const сhangeDate = (newValue) => {
    setTaskDateValue(newValue);
  };

  useEffect(() => {
    if (date) {
      setTaskDateValue(date.split("-").reverse().join(""));
    }
  }, [date]);

  useEffect(() => {
    if (taskDate) {
      setTaskDateValue(taskDate.split("-").reverse().join(""));
    }
  }, [taskDate]);

  const onClose = () => {
    dispatch(closeTask());
    setTask("");
    setDescription("");
    setOpenPopup(false);
  };

  const transformDate = (date) => {
    return date.toLocaleDateString().replace(/\./g, "-");
  };

  const getDate = (date) => {
    if (typeof date === "string") {
      const arrDate = date.split("");
      return `${arrDate.splice(6).join("")}-${arrDate
        .splice(4, 6)
        .join("")}-${arrDate.splice(0, 4).join("")}`;
    } else {
      return transformDate(new Date(date));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // let currentDate = getDate(taskDateValue);
    // console.log(currentDate, taskDateValue);
    if (popupStyle) {
      try {
        let currentDate = getDate(taskDateValue);
        await writeTask(id, currentDate, taskName, taskDescription);
      } catch (err) {
        console.log(err.message);
      }
    } else {
      try {
        let currentDate = getDate(taskDateValue);
        await editTask(
          id,
          taskId,
          currentDate,
          taskName,
          taskDescription,
          isDone
        );
        if (currentDate !== date) {
          await deleteTaskFromDB(id, taskId, date);
        }
        dispatch(closeTask());
      } catch (err) {
        console.log(err.message);
      }
    }
    onClose();
  };

  return (
    <div className={toggleModal}>
      <div className="addTask__shade"></div>
      <form className="addTask__popup">
        <h2>{popupStyle ? "Add new task" : "Edit task"}</h2>
        <div>
          <label>Task name</label>
          <input
            className="addTaskName"
            onChange={(e) => setTask(e.target.value)}
            value={taskName}
          />
          <label>Description</label>
          <textarea
            className="addTaskName addTaskName__description"
            onChange={(e) => setDescription(e.target.value)}
            value={taskDescription}
          />
          <div className="addTask__date">
            <label>Date</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                inputFormat="DD-MM-YYYY"
                value={taskDateValue}
                onChange={сhangeDate}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
        </div>

        <div className="btnsContainer">
          <button className="main_button" type="submit" onClick={handleSubmit}>
            {popupStyle ? "Add new task" : "Save"}
          </button>
          <button className="main_button__cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
// eslint-disable-next-line react/prop-types
export default AddTaskPopup;
