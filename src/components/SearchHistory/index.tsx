import { useContext } from "react";
import { AppContext } from "../../App";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import { format } from "date-fns";
import "./style.css";
import { searchQueryType } from "../../api/types";

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
    <div className="search-history-container">
      <h2 className="container-title">Search History</h2>
      {recentSearches.map((history, index) => {
        return (
          <div className="history-row" key={index}>
            <div className="history-row-label">
              <span>
                {history.place.name}, {history.place.country}
              </span>
              <span className="caption">
                {format(history.timestamp, "dd-MM-yyyy hh:mmaaa")}
              </span>
            </div>
            <div className="history-row-action">
              <button
                className="btn btn-rounded "
                onClick={() => handleSearchAgain(history)}
              >
                <SearchIcon></SearchIcon>
              </button>
              <button
                className="btn btn-rounded "
                onClick={() => handleDelete(index)}
              >
                <DeleteIcon></DeleteIcon>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchHistory;
