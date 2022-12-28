import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/AuthPage/Login";
import CalendarPage from "./components/calendarPage/calendarPage";
import PrivateRoutes from "./routes/privateRoutes";
import Register from "./components/AuthPage/Register";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route
          path="calendar"
          element={
            <PrivateRoutes>
              <CalendarPage />
            </PrivateRoutes>
          }
        />
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
