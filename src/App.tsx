import "./App.css";
import ThemeSwitcher from "./components/ThemeSwitcher";
import SearchComponent from "./components/SearchComponent";
import WeatherDisplay from "./components/WeatherDisplay";
import SearchHistory from "./components/SearchHistory";
import { createContext, useState, useEffect } from "react";
import { WEATHER_API_URL } from "./api";
import { searchQueryType, searchResultType, placeType } from "./api/types";

const MAX_HISTORY_LENGTH = 7;

interface AppContextType {
  place: placeType | null;
  setPlace: (place: placeType | null) => void;
  searchResult?: searchResultType | null; // Optional property
  setSearchResult: (result: searchResultType | null) => void;
  recentSearches: searchQueryType[] | [];
  setRecentSearches: (searches: searchQueryType[] | []) => void;
  addRecentSearch: (query: searchQueryType) => void;
}

export const AppContext = createContext<AppContextType>({
  place: null,
  setPlace: () => {},
  setSearchResult: () => {},
  recentSearches: [],
  setRecentSearches: () => {},
  addRecentSearch: () => {},
});

function App() {
  const [place, setPlace] = useState<placeType | null>(null);
  const [searchResult, setSearchResult] = useState<searchResultType | null>(
    null
  );
  const [recentSearches, setRecentSearches] = useState<searchQueryType[]>([]);

  const addRecentSearch = (searchQuery: searchQueryType) => {
    const updatedList = [searchQuery, ...recentSearches].slice(
      0,
      MAX_HISTORY_LENGTH - 1
    );
    setRecentSearches(updatedList);
  };

  const fetchWeather = async (location: placeType) => {
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

      const foundWeatherInfo: searchResultType = {
        place: { ...location },
        weatherInfo: { ...response },
        timestamp: new Date(),
      };

      // set into weatherInfo
      setSearchResult(foundWeatherInfo);
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
          searchResult,
          setSearchResult,
          recentSearches,
          setRecentSearches,
          addRecentSearch,
        }}
      >
        <SearchComponent></SearchComponent>
        {(searchResult || recentSearches.length > 0) && (
          <div className="result-panel">
            {searchResult && <WeatherDisplay></WeatherDisplay>}
            {recentSearches.length > 0 && <SearchHistory></SearchHistory>}
          </div>
        )}
      </AppContext.Provider>
    </div>
  );
}

export default App;
