import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/AuthPage/Login";
import CalendarPage from "./components/calendarPage/calendarPage";
import PrivateRoutes from "./routes/privateRoutes";
import Register from "./components/AuthPage/Register";

function App() {
  // return <CalendarPage />;
  return (
    // <Login />
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<CalendarPage />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
}

export default App;
