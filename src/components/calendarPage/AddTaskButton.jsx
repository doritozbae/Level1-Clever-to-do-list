import React from "react";
import { useDispatch } from "react-redux";
import AddTaskPopup from "./Popups/addTask";
import { setTaskData } from "../../store/addTaskReducer";
import "../../styles/taskButton.css";

function AddTask({ OpenPopup, setOpenPopup }) {
  const dispatch = useDispatch();

  const togglePopup = () => {
    setOpenPopup(true);
    const taskFilled = {
      task: "",
      description: "",
      popupStyle: true,
      taskId: null,
      userId: null,
      date: null,
    };
    dispatch(setTaskData({ taskFilled }));
  };

  return (
    <div className="btn__contaner">
      <button className="main_button" onClick={togglePopup}>
        Add new task
      </button>

      <AddTaskPopup OpenPopup={OpenPopup} setOpenPopup={setOpenPopup} />
    </div>
  );
}

export default AddTask;
