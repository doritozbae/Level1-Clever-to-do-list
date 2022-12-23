import React from "react";
import Day from "./dayCard";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import "../../styles/calendar.css";

function Calendar() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };

  return (
    <div className="calendarBody">
      <Slider {...settings}>
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
      </Slider>
    </div>
  );
}

export default Calendar;
