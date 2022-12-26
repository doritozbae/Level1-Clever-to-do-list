import React, { useState } from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../../styles/taskButton.css";
import AddTaskPopup from "./Popups/addTask";

function AddTask() {
  const [OpenPopup, setOpenPopup] = useState(false);

  const handlePopup = () => {
    setOpenPopup(true);
  };

  const theme = createTheme({
    palette: {
      neutral: {
        main: "#a7caff;",
        contrastText: "#000",
      },
    },
  });

  return (
    <div className="btn__contaner">
      <ThemeProvider theme={theme}>
        <Button color="neutral" variant="contained" onClick={handlePopup}>
          Add new task
        </Button>
      </ThemeProvider>

      <AddTaskPopup OpenPopup={OpenPopup} setOpenPopup={setOpenPopup} />
    </div>
  );
}

export default AddTask;
