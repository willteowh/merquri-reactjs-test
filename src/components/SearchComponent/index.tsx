import { useState, useContext } from "react";
import { AppContext } from "../../AppProvider";
import { fetchLocation } from "../../api";
import { SearchContainer, SearchInput } from "./styled";
import { SearchButton } from "./SearchButton";

const SearchComponent = () => {
  const { setPlace, addRecentSearch } = useContext(AppContext);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  const [message, setMessage] = useState("");

  const doSearch = async () => {
    // validation: searchText cannot be empty, or it can't be loading
    if (searchText.trim() === "" || loading) {
      return;
    }

    setLoading(true); // Set loading state to true
    setMessage("Searching...");

    try {
      // fetch from api
      const response = await fetchLocation(searchText);

      // if no location is returned, exit
      if (response.length === 0) {
        setMessage("City/Country not found");
        return;
      }

      const place = response[0];

      // display Weather info
      setPlace(place);

      // also, record Search History
      let now = new Date();
      addRecentSearch({
        id: now.valueOf(),
        timestamp: now,
        place: { ...place },
      });

      // empty search and message
      setSearchText("");
      setMessage("");
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong.");
    } finally {
      setLoading(false); // Set loading state to false after search is done
    }
  };

  const handleInputChange = (event: any) => {
    setSearchText(event.target.value);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      doSearch();
      return;
    }
  };

  return (
    <>
      <SearchContainer>
        <SearchInput
          name="searchText"
          placeholder="Search for a location"
          value={searchText}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        ></SearchInput>
        <SearchButton onClick={doSearch} isSearching={loading} />
      </SearchContainer>
      {message && <p style={{ paddingLeft: "20px" }}>{message}</p>}
    </>
  );
};

export default SearchComponent;
