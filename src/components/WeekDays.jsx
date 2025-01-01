import React, { useState, useEffect } from "react";

const Weekdays = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDay = daysOfWeek[currentTime.getDay()];
  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const formattedDate = currentTime.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "2-digit",
  }); // Format: 20 Nov '24

  return (
    <div className="px-5 py-2 bg-blue-500 text-white rounded-lg text-center shadow-md">
      <h3 className="text-md font-extrabold">
        {formattedTime} - {currentDay}, {formattedDate}
      </h3>
    </div>
  );
};

export default Weekdays;
