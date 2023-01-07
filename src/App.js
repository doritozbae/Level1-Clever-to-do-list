import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ref, onValue } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";

import PrivateRoutes from "./routes/privateRoutes";
import Login from "./components/AuthPage/Login";
import Register from "./components/AuthPage/Register";
import CalendarPage from "./components/calendarPage/calendarPage";
import { AuthContextProvider, useAuth } from "./context/AuthContext";
import { setUserData } from "./store/userDataReducer";
import { setUser } from "./store/userReducer";
import { auth, db } from "./database/firebase";

function App() {
  const dispatch = useDispatch();
  const { id } = useAuth();

  useEffect(() => {
    if (id) {
      const dataRef = ref(db, id);
      onValue(dataRef, (snapshot) => {
        const data = snapshot.val();
        dispatch(setUserData({ data }));
      });
    }
  }, [dispatch, id]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            email: user.email,
            token: user.accessToken,
            id: user.uid,
          })
        );
      }
    });
  }, []);

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
