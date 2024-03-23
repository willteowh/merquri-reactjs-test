// AppProvider.tsx
import React, { createContext, useState, useEffect, ReactNode } from "react";
import { fetchWeather } from "./api";
import { placeType, searchQueryType, searchResultType } from "./types";

interface AppContextType {
  place: placeType | null;
  setPlace: (place: placeType | null) => void;
  searchResult?: searchResultType | null;
  setSearchResult: (result: searchResultType | null) => void;
  recentSearches: searchQueryType[];
  setRecentSearches: (searches: searchQueryType[]) => void;
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

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [place, setPlace] = useState<placeType | null>(null);
  const [searchResult, setSearchResult] = useState<searchResultType | null>(
    null
  );
  const [recentSearches, setRecentSearches] = useState<searchQueryType[]>([]);
  const MAX_HISTORY_LENGTH = 7;

  const addRecentSearch = (searchQuery: searchQueryType) => {
    const updatedList = [searchQuery, ...recentSearches].slice(
      0,
      MAX_HISTORY_LENGTH - 1
    );
    setRecentSearches(updatedList);
  };

  const searchWeather = async (location: placeType) => {
    try {
      const response = await fetchWeather(location);
      const foundWeatherInfo: searchResultType = {
        place: { ...location },
        weatherInfo: { ...response },
        timestamp: new Date(),
      };
      setSearchResult(foundWeatherInfo);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (place !== null) {
      searchWeather(place);
    }
  }, [place]);

  return (
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
      {children}
    </AppContext.Provider>
  );
};
