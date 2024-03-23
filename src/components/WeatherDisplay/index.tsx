import { useContext } from "react";
import { AppContext } from "../../App";
import { format } from "date-fns";
import "./style.css";

const WeatherDisplay = () => {
  const { searchResult } = useContext(AppContext);
  const { place, weatherInfo, timestamp } = searchResult ?? {};

  const formatTemperature = (temp?: number) => `${Math.round(temp ?? 0)}`;
  const formatDatetime = (dateObject: Date) =>
    format(dateObject, "dd-MM-yyyy hh:mmaaa");

  return (
    <div className="weather-container">
      <div className="weather-temperature">
        <h2 className="weather-title">Today's Weather</h2>
        <span className="big-temperature-display">
          {formatTemperature(weatherInfo?.main?.temp)}
          <sup>o</sup>
        </span>
        <span>
          H: {formatTemperature(weatherInfo?.main?.temp_min)}
          <sup>o</sup> L: {formatTemperature(weatherInfo?.main?.temp_max)}
          <sup>o</sup>
        </span>
        <span className="font-color-secondary font-bold">
          {place?.name}, {place?.country}
        </span>
      </div>
      <div className="weather-figure-sub">
        <span className="">{timestamp && formatDatetime(timestamp)}</span>
        <span className="">Humidity: {weatherInfo?.main?.humidity}%</span>
        <span className="">{weatherInfo?.weather?.[0]?.main}</span>
      </div>
    </div>
  );
};

export default WeatherDisplay;