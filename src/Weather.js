// src/components/Weather.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import getWeatherIconUrl from './weatherIcon.js';
import './weather.css';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Toronto'); // Default city

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d7bf3a278d8d7f86543af53d418ce2b4`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, [city]); // Re-fetch data whenever the 'city' state changes

  // Display relevant weather information with icons
  return (
    <div className="weather-container">
        <label>
    <i className="fas fa-search"></i> Enter City:
    <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
    />
    </label>
      {weatherData ? (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp} °C</p>
          {/* Display weather icon */}
          {weatherData.weather && weatherData.weather[0] && (
            <img
              className="weather-icon"
              src={getWeatherIconUrl(weatherData.weather[0].icon)}
              alt={weatherData.weather[0].description}
            />
          )}
          {/* Add more relevant information based on the API response */}
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Weather;