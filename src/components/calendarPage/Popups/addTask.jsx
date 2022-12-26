import React from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../../../styles/Popups/addTask.css";

// eslint-disable-next-line react/prop-types
function AddTaskPopup({ OpenPopup, setOpenPopup }) {
  const theme = createTheme({
    palette: {
      neutral: {
        main: "#a7caff;",
        contrastText: "#000",
      },
      cancel: {
        main: "#C0C0C0;",
        contrastText: "#000",
      },
    },
  });

  const toggleModal = OpenPopup ? "show" : "hide";

  return (
    <div className={toggleModal}>
      <div className="addTask__shade"></div>
      <form className="addTask__popup">
        <h2>Add new task</h2>
        <div>
          <label>Task name</label>
          <input
            className="addTaskName"
            //   value={values.fullname}
            //   onChange={handlechange}
            //   error={error.fullname}
          />
          <label>Description</label>
          <textarea
            className="addTaskName addTaskName__description"
            //   value={values.city}
            //   onChange={handlechange}
          />
        </div>

        <div className="btnsContainer">
          <ThemeProvider theme={theme}>
            <Button type="submit" color="neutral" variant="contained">
              Add new task
            </Button>
            <div className="btnGap"></div>
            <Button
              type="submit"
              color="cancel"
              variant="contained"
              onClick={() => {
                setOpenPopup(false);
              }}
            >
              Cancel
            </Button>
          </ThemeProvider>
        </div>
      </form>
    </div>
  );
}
// eslint-disable-next-line react/prop-types
export default AddTaskPopup;
