export const GEO_API_URL_RAW = "http://api.openweathermap.org/geo/1.0/direct";
export const GEO_API_URL = `${GEO_API_URL_RAW}?appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`;

export const WEATHER_API_URL_RAW =
  "https://api.openweathermap.org/data/2.5/weather";
export const WEATHER_API_URL = `${WEATHER_API_URL_RAW}?appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`;
