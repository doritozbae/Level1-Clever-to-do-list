import React from "react";

import "../../styles/dayCard.css";

function Day() {
  return (
    <div className="dayCard">
      <h2>December</h2>
      <h1>23</h1>
      <h3>Friday</h3>
      <div className="dayTask__container">
        <div className="dayTask"></div>
        <div className="dayTask doneTask"></div>
      </div>
    </div>
  );
}

export default Day;
