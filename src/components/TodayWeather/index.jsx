import { useEffect, useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
import { WEATHER_API_URL } from "../../api";

const TodayWeather = ({ place }) => {
  const [weatherInfo, setWeatherInfo] = useState(null);

  useEffect(() => {
    fetchWeather(place);
  }, [place]);

  const fetchWeather = async (place) => {
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

      // set into weatherInfo
      setWeatherInfo(weatherInfo);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {weatherInfo && (
        <WeatherDisplay weatherInfo={weatherInfo}></WeatherDisplay>
      )}
    </>
  );
};

export default TodayWeather;
