const WeatherDisplay = ({ weatherInfo }) => {
  const { place, weather, timestamp } = weatherInfo;

  return (
    <>
      <span>
        {place.name}, {place.country}
      </span>
      <b>{weather.weather[0].main}</b>
      <ul>
        {/* <li>Description: {weather[0].description}</li> */}
        <li>
          Temperature: {weather.main.temp_min}°C ~ {weather.main.temp_max}°C
        </li>
        <li>Humidity: {weather.main.humidity}%</li>
        <li>Time: {timestamp.toLocaleString()}</li>
      </ul>
    </>
  );
};

export default WeatherDisplay;
