// src/utils/weatherIcons.js

const getWeatherIconUrl = (iconCode) => {
  return `/weather-icons/${iconCode}.png`; // Use the local path
};

export default getWeatherIconUrl;
