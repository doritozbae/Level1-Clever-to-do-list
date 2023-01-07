import React from "react";
import Day from "./dayCard";
import moment from "moment";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Calendar() {
  const currentDay = moment();
  const day = currentDay.clone().subtract(1, "day");
  let daysArray = [...Array(365)].map(() => day.add(1, "day").clone());

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
          <Day key={dayItem} dayItem={dayItem} />
        ))}
      </Slider>
    </>
  );

  // <Day />;
}

export default Calendar;
