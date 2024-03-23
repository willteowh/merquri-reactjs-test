import { useContext } from "react";
import { AppContext } from "../../App";
import HistoryRow from "./HistoryRow";
import { Heading, SearchHistoryContainer } from "./styled";

const SearchHistory = () => {
  const { recentSearches } = useContext(AppContext);

  return (
    <SearchHistoryContainer>
      <Heading>Search History</Heading>
      {recentSearches.map((history, index) => {
        return <HistoryRow data={history} key={index}></HistoryRow>;
      })}
    </SearchHistoryContainer>
  );
};

export default SearchHistory;
