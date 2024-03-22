import "./App.css";
import TodayWeather from "./components/TodayWeather";
import SearchHistory from "./components/SearchHistory";
import { createContext, useState } from "react";

const MAX_HISTORY_LENGTH = 7;

const AppContext = createContext();

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [historyList, setHistoryList] = useState([]);

  const recordSearchHistory = (searchQuery) => {
    const updatedList = [searchQuery, ...historyList].slice(
      0,
      MAX_HISTORY_LENGTH - 1
    );
    setHistoryList(updatedList);
  };

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          weatherInfo,
          setWeatherInfo,
          historyList,
          recordSearchHistory,
        }}
      >
        <TodayWeather onSearch={recordSearchHistory}></TodayWeather>
        <SearchHistory historyList={historyList}></SearchHistory>
      </AppContext.Provider>
    </div>
  );
}

export default App;
