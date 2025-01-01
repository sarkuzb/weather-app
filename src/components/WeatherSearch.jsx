import React, { useState } from "react";

const WeatherSearch = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
      setCity(""); // Clear the input after search
    }
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      <input
        type="text"
        className="border text-slate-700 rounded px-4 py-2 w-full max-w-md"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default WeatherSearch;
