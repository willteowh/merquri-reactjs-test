import SearchComponent from "./components/SearchComponent";
import WeatherDisplay from "./components/WeatherDisplay";
import SearchHistory from "./components/SearchHistory";
import { StyledDisplay } from "./styled/Container.styled";
import { useContext } from "react";
import { AppContext } from "./AppProvider";

const MainPage = () => {
  const { searchResult, recentSearches } = useContext(AppContext);

  return (
    <>
      <SearchComponent></SearchComponent>
      {(searchResult || recentSearches.length > 0) && (
        <StyledDisplay>
          {searchResult && <WeatherDisplay></WeatherDisplay>}
          {recentSearches.length > 0 && <SearchHistory></SearchHistory>}
        </StyledDisplay>
      )}
    </>
  );
};

export default MainPage;
