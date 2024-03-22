import { useState } from "react";
import SearchPlace from "./SearchPlace";
import WeatherDisplay from "./WeatherDisplay";
import { WEATHER_API_URL } from "../../api";

const TodayWeather = ({ onSearch }) => {
  const [weatherInfo, setWeatherInfo] = useState(null);

  const fetchWeather = async (place) => {
    // TODO: FETCH from weather api

    // TODO: fetch from api
    try {
      let response = await (
        await fetch(
          `${WEATHER_API_URL}&lat=${place.lat}&lon=${place.lon}&units=metric`
        )
      ).json();

      console.log(response);

      const weatherInfo = {
        place: { ...place },
        weather: { ...response },
        timestamp: new Date(),
      };

      // TODO: display Weahter info
      setWeatherInfo(weatherInfo);

      // also, record Search History
      onSearch({
        place: { ...place },
        timestamp: new Date(),
      });
    } catch (error) {
      console.error(error);
    }

    // set into weatherInfo
  };

  return (
    <>
      <h1>Today's Weather</h1>
      <hr></hr>
      <SearchPlace foundPlace={(place) => fetchWeather(place)}></SearchPlace>
      {weatherInfo && (
        <WeatherDisplay weatherInfo={weatherInfo}></WeatherDisplay>
      )}
    </>
  );
};

export default TodayWeather;
