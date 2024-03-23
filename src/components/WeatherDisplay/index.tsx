import { useContext } from "react";
import { AppContext } from "../../App";
import { format } from "date-fns";
import {
  WeatherContainer,
  TempContainer,
  TempDisplay,
  TempTitle,
  FigureContainer,
} from "./styled";
import WeatherIcon from "./WeatherIcon";

const WeatherDisplay = () => {
  const { searchResult } = useContext(AppContext);
  const { place, weatherInfo, timestamp } = searchResult ?? {};

  const formatTemperature = (temp?: number) => `${Math.round(temp ?? 0)}`;
  const formatDatetime = (dateObject: Date) =>
    format(dateObject, "dd-MM-yyyy hh:mmaaa");

  return (
    <WeatherContainer>
      {weatherInfo?.weather?.[0] && (
        <WeatherIcon data={weatherInfo?.weather?.[0]}></WeatherIcon>
      )}
      <TempContainer>
        <TempTitle>Today's Weather</TempTitle>
        <TempDisplay>{formatTemperature(weatherInfo?.main?.temp)}°</TempDisplay>
        <span>
          H: {formatTemperature(weatherInfo?.main?.temp_min)}° L:{" "}
          {formatTemperature(weatherInfo?.main?.temp_max)}°
        </span>
        <span className="font-color-secondary font-bold">
          {place?.name}, {place?.country}
        </span>
      </TempContainer>
      <FigureContainer>
        <span className="font-color-secondary">
          {timestamp && formatDatetime(timestamp)}
        </span>
        <span className="font-color-secondary">
          Humidity: {weatherInfo?.main?.humidity}%
        </span>
        <span className="font-color-secondary ">
          {weatherInfo?.weather?.[0]?.main}
        </span>
      </FigureContainer>
    </WeatherContainer>
  );
};

export default WeatherDisplay;
