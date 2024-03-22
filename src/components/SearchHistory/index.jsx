import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import { format } from "date-fns";

import "./style.css";

const SearchHistory = ({ historyList }) => {
  return (
    <div className="search-history-container">
      <h2 className="container-title">Search History</h2>
      {historyList.map((history, index) => {
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
              {/* TODO: search again */}
              <button className="btn btn-rounded ">
                <SearchIcon></SearchIcon>
              </button>
              {/* TODO: remove this history */}
              <button className="btn btn-rounded ">
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
