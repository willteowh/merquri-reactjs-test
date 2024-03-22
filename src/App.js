import "./App.css";
import TodayWeather from "./components/TodayWeather";
import SearchHistory from "./components/SearchHistory";
import ThemeSwitcher from "./components/ThemeSwitcher";
import SearchBox from "./components/SearchBox";

import { useState } from "react";
const MAX_HISTORY_LENGTH = 7;

function App() {
  const [place, setPlace] = useState(null);
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
      <ThemeSwitcher></ThemeSwitcher>
      <SearchBox
        onSearch={recordSearchHistory}
        foundPlace={(place) => setPlace(place)}
      ></SearchBox>
      <div className="result-panel">
        <TodayWeather place={place}></TodayWeather>
        <SearchHistory historyList={historyList}></SearchHistory>
      </div>
    </div>
  );
}

export default App;
