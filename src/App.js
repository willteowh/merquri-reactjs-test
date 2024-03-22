import "./App.css";
import ThemeSwitcher from "./components/ThemeSwitcher";
import SearchComponent from "./components/SearchComponent";
import WeatherDisplay from "./components/WeatherDisplay";
import SearchHistory from "./components/SearchHistory";
import { createContext, useState, useEffect } from "react";
import { WEATHER_API_URL } from "./api";

const MAX_HISTORY_LENGTH = 7;
export const AppContext = createContext();

function App() {
  //   const [recentSearches, setRecentSearches] = useState([]);
  const [place, setPlace] = useState(null);
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);

  const addRecentSearch = (searchQuery) => {
    const updatedList = [searchQuery, ...searchHistory].slice(
      0,
      MAX_HISTORY_LENGTH - 1
    );
    setSearchHistory(updatedList);
  };

  const fetchWeather = async (location) => {
    console.log("fetchWeather");
    console.log(location);

    // TODO: fetch from api
    try {
      let response = await (
        await fetch(
          `${WEATHER_API_URL}&lat=${location.lat}&lon=${location.lon}&units=metric`
        )
      ).json();

      console.log(response);

      // set into weatherInfo
      setWeatherInfo({
        place: { ...location },
        weather: { ...response },
        timestamp: new Date(),
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (place != null) {
      fetchWeather(place);
    }
  }, [place]);

  return (
    <div className="App">
      <ThemeSwitcher></ThemeSwitcher>
      <AppContext.Provider
        value={{
          place,
          setPlace,
          weatherInfo,
          setWeatherInfo,
          searchHistory,
          setSearchHistory,
          addRecentSearch,
        }}
      >
        <SearchComponent></SearchComponent>
        {(weatherInfo || searchHistory.length > 0) && (
          <div className="result-panel">
            {weatherInfo && <WeatherDisplay></WeatherDisplay>}
            {searchHistory.length > 0 && <SearchHistory></SearchHistory>}
          </div>
        )}
      </AppContext.Provider>
    </div>
  );
}

export default App;
