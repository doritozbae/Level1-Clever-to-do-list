import React, { useState } from "react";
import { getMonth } from "../../utils/getMonth";
import { getWeekDay } from "../../utils/getWeekDay";

import moment from "moment";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../styles/dayCard.css";

function Day() {
  const [SelectedDay, setSelectedDay] = useState(false);

  const handleSelectedDay = () => {
    if (SelectedDay === false) {
      setSelectedDay(true);
    } else setSelectedDay(false);
  };

  const toggleSelectedDay = SelectedDay ? "dayCard selectedDay" : "dayCard";

  const currentDay = moment();
  const day = currentDay.clone().subtract(1, "day");
  const daysArray = [...Array(365)].map(() => day.add(1, "day").clone());

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
  };

  return (
    <>
      <Slider {...settings}>
        {daysArray.map((dayItem) => (
          <div
            className={toggleSelectedDay}
            key={dayItem.format("DDMMYYYY")}
            onClick={handleSelectedDay}
          >
            <h2>{getMonth(dayItem.format("MM") - 1)}</h2>
            <h1>{dayItem.format("D")}</h1>
            <h3>{getWeekDay(dayItem.weekday())}</h3>
            <div className="dayTask__container">
              <div className="dayTask"></div>
              <div className="dayTask doneTask"></div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default Day;
