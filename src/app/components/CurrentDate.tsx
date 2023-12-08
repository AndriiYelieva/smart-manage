/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useEffect, useState } from "react";

export default function CurrentDate() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);


  const hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  const year = currentTime.getFullYear();
  const date = currentTime.getDate();
  const monthId = currentTime.getMonth();
  const day = currentTime.getDay();

  return (
    <>
      <div className="today-block text-end mt-2">
        {days[day]}
      </div>
      <div className="date-time-block text-end">
        <p>{`${date} ${monthArr[monthId]} ${year} 🕓 ${hours}:${minutes < 10 ? '0' + minutes : minutes}`}</p>

      </div>
    </>
  )
}