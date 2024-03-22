const SearchHistory = ({ historyList }) => {
  /* const example_history = [
    {
      city: "Johor",
      country: "MY",
      timeSearch: "2024-03-22 15:02:00",
    },
    {
      city: "Osaka",
      country: "KP",
      timeSearch: "2024-03-22 15:01:00",
    },
    {
      city: "Seoul",
      country: "KR",
      timeSearch: "2024-03-22 14:29:00",
    },
    {
      city: "Taipei",
      country: "TW",
      timeSearch: "2024-03-22 13:29:00",
    },
  ]; */

  return (
    <div>
      <h2>Search History</h2>
      <hr />
      {historyList.map((history, index) => {
        return (
          <div className="row" key={index}>
            <div className="col">
              <span>
                {index + 1}. {history.place.name} {history.place.country}
              </span>
              <span>{history.timestamp.toLocaleString()}</span>
              <button type="button">Search Again</button>
              <button type="button">Delete History</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchHistory;
