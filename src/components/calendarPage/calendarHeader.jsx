import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import "../../styles/calendarHeader.css";

function CalendarHeader() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="calendarHeader">
      <div className="calendarGreeting">
        <p>Welcome,&nbsp; </p>
        <p className="calendarHeaderOptions">{user && user.email}</p>
      </div>
      <p className="logOut__font" onClick={handleLogout}>
        LogOut
      </p>
    </div>
  );
}

export default CalendarHeader;
