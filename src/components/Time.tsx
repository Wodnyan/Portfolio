import React from "react";
import { useEffect, useState } from "react";
import { dateToTime } from "../utilities/time";

const Time = () => {
  const [time, setTime] = useState(dateToTime());

  useEffect(() => {
    setInterval(() => {
      setTime(dateToTime());
    }, 1000);
  }, []);

  return <section className="time">{time}</section>;
};

export default Time;
