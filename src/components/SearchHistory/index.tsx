import { useContext } from "react";
import { AppContext } from "../../AppProvider";
import HistoryRow from "./HistoryRow";
import { Heading, SearchHistoryContainer } from "./styled";

const SearchHistory = () => {
  const { recentSearches } = useContext(AppContext);

  return (
    <SearchHistoryContainer>
      <Heading>Search History</Heading>
      {recentSearches.map((history, index) => {
        return (
          <HistoryRow
            key={index}
            data={history}
            index={history.id}
          ></HistoryRow>
        );
      })}
    </SearchHistoryContainer>
  );
};

export default SearchHistory;
