import { useMemo } from "react";
import { format } from "date-fns";
import "./style.css";

const WeatherDisplay = ({ weatherInfo }) => {
  const { place, weather, timestamp } = weatherInfo;

  return (
    <>
      <div className="weather-container ">
        <div className="weather-figure">
          <h2 className="weather-title">Today's Weather</h2>
          <span className="big-temperature-display">
            {Math.round(weather.main.temp)}°
          </span>
          <span>
            H:{Math.round(weather.main.temp_min)}° L:
            {Math.round(weather.main.temp_max)}°
          </span>

          <span className="font-color-secondary font-bold">
            {place.name}, {place.country}
          </span>
        </div>

        <div className="weather-figure-sub">
          <div className="caption-mobile-stack font-color-secondary ">
            <span className="caption-item">
              {format(timestamp, "dd-MM-yyyy hh:mmaaa")}
            </span>
            <span className="caption-item">
              Humidity: {weather.main.humidity}%
            </span>
            <span className="caption-item">{weather.weather[0].main}</span>
          </div>
        </div>
      </div>
      {/* TODO: sun or cloud */}
      {/* <div class="weather-image sun"></div> */}
    </>
  );
};

export default WeatherDisplay;
