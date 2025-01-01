import React, { useState } from "react";
import axios from "axios";
import WeatherSearch from "./components/WeatherSearch";
import WeatherCard from "./components/WeatherCard";
import Weekdays from "./components/WeekDays";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    const apiKey = import.meta.env.VITE_WEATHER_API;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
      setError(null); // Clear previous errors
      const response = await axios.get(apiUrl);
      setWeatherData(response.data);
    } catch (err) {
      setError("City not found or API error");
      setWeatherData(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 text-white flex flex-col items-center">
      <header className="w-full py-6">
        <h1 className="text-5xl font-extrabold text-center drop-shadow-lg">
          Weather App
        </h1>
      </header>
      <main className="w-full max-w-4xl px-4">
        <WeatherSearch onSearch={fetchWeather} />
        {error && <p className="text-red-500 mt-4">{error}</p>}
        <WeatherCard weather={weatherData} />
      </main>
      <div className="absolute bottom-10 right-10">
        <Weekdays />
      </div>
    </div>
  );
};

export default App;
