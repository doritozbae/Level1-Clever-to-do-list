import React from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
    <ThemeProvider theme={theme}>
      <Button color="neutral" variant="contained">
        Add new task
      </Button>
    </ThemeProvider>
  );
}

export default AddTask;
