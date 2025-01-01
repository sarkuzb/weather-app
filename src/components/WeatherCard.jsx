import React from "react";

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  const { name, main, weather: weatherDetails } = weather;

  const getWeatherImage = (weatherType) => {
    const weatherImages = {
      Clear: "/images/clear.png",
      Rain: "/images/rain.png",
      Clouds: "/images/clouds.png",
      Snow: "/images/snow.png",
      Thunderstorm: "/images/thunderstorm.png",
      Drizzle: "/images/drizzle.png",
      Mist: "/images/mist.png",
    };

    return weatherImages[weatherType] || "/images/default.jpg"; // Fallback to default
  };

  const weatherType = weatherDetails[0].main; // E.g., Clear, Rain
  const weatherImage = getWeatherImage(weatherType);

  return (
    <div className="relative w-full max-w-md mx-auto mt-8 rounded-lg overflow-hidden shadow-lg">
      <img
        src={weatherImage}
        alt={weatherType}
        className="w-full h-48 bg-blue-300 object-cover hover:scale-105 transition duration-300 cursor-pointer"
      />
      <div className="bg-white p-6">
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        <p className="text-lg text-gray-600 mt-2 capitalize">
          {weatherDetails[0].description}
        </p>
        <div className="mt-4 flex justify-between items-center">
          <p className="text-4xl font-semibold text-blue-500">{main.temp}°C</p>
          <div className="text-sm text-gray-500">
            <p>Humidity: {main.humidity}%</p>
            <p>Pressure: {main.pressure} hPa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
