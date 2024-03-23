import { useContext } from "react";
import { AppContext } from "../../App";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import { format } from "date-fns";
import { searchQueryType } from "../../api/types";
import { RoundedButton } from "../../styled/Button.styled";
import {
  Heading,
  SearchHistoryContainer,
  ItemRow,
  ItemLabel,
  ItemAction,
} from "./styled";

const SearchHistory = () => {
  const { recentSearches, setRecentSearches, setPlace } =
    useContext(AppContext);

  const handleSearchAgain = (query: searchQueryType) => {
    console.log("handleSearchAgain");
    const { place } = query;
    setPlace(place);
  };

  const handleDelete = (index: number) => {
    console.log("handleDelete");
    const updatedSearches: searchQueryType[] = recentSearches.filter(
      (_, i) => i !== index
    );
    setRecentSearches(updatedSearches);
  };

  return (
    <SearchHistoryContainer>
      <Heading>Search History</Heading>
      {recentSearches.map((history, index) => {
        return (
          <ItemRow key={index}>
            <ItemLabel>
              <span>
                {history.place.name}, {history.place.country}
              </span>
              <span className="font-smaller">
                {format(history.timestamp, "dd-MM-yyyy hh:mmaaa")}
              </span>
            </ItemLabel>
            <ItemAction>
              <RoundedButton onClick={() => handleSearchAgain(history)}>
                <SearchIcon></SearchIcon>
              </RoundedButton>
              <RoundedButton onClick={() => handleDelete(index)}>
                <DeleteIcon></DeleteIcon>
              </RoundedButton>
            </ItemAction>
          </ItemRow>
        );
      })}
    </SearchHistoryContainer>
  );
};

export default SearchHistory;
