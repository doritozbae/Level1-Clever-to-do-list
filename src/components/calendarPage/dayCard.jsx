import React, { useEffect, useState } from "react";
import { getMonth } from "../../utils/getMonth";
import { getWeekDay } from "../../utils/getWeekDay";
import { setDate, selectDate } from "../../store/dateReducer";
import { selectUserData } from "../../store/userDataReducer";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/dayCard.css";

function Day({ dayItem }) {
  const currentDate = dayItem.format("DD-MM-YYYY");
  const day = dayItem.format("D");
  const month = getMonth(dayItem.format("MM") - 1);
  const weekday = getWeekDay(dayItem.weekday());

  const dispatch = useDispatch();
  const { data } = useSelector(selectUserData);
  const { date } = useSelector(selectDate);

  const [isActive, setIsActive] = useState(false);
  const [haveTask, setHaveTask] = useState(false);
  const [haveDoneTask, setHaveDoneTask] = useState(false);

  useEffect(() => {
    if (date === currentDate) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [date]);

  const handleClickSlide = () => {
    dispatch(setDate({ date: currentDate }));
    // console.log(currentDate, date);
  };

  useEffect(() => {
    if (data && Object.prototype.hasOwnProperty.call(data, currentDate)) {
      setHaveTask(true);
      const haveDoneTask = Object.values(data[currentDate]).every(
        (task) => !task.isDone
      );
      setHaveDoneTask(!haveDoneTask);
    } else {
      setHaveTask(false);
    }
  }, [currentDate, data]);

  return (
    <>
      <div
        onClick={() => {
          handleClickSlide(dayItem.format("DD-MM-YYYY"));
        }}
        className={isActive ? "dayCard active" : "dayCard"}
        key={dayItem.format("DDMMYYYY")}
      >
        <h2>{month}</h2>
        <h1>{day}</h1>
        <h3>{weekday}</h3>
        <div className="dayTask__container">
          <div className={haveTask ? "dayTask" : ""}></div>
          <div className={haveDoneTask ? "dayTask doneTask" : ""}></div>
        </div>
      </div>
    </>
  );
}

export default Day;
