import React from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../../styles/taskButton.css";

function AddTask() {
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
        <Button color="neutral" variant="contained">
          Add new task
        </Button>
      </ThemeProvider>
    </div>
  );
}

export default AddTask;
