import { useState, useContext, useRef } from "react";
import { AppContext } from "../../AppProvider";
import { fetchLocation } from "../../api";
import { SearchContainer, SearchInput } from "./styled";
import { SearchButton } from "./SearchButton";

const SearchComponent = () => {
  const { setPlace, addRecentSearch } = useContext(AppContext);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

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

      // success
      // setPlace to load Weather based on place
      const place = response[0];
      setPlace(place);

      // also, record Search History
      let now = new Date();
      addRecentSearch({
        id: now.valueOf(),
        timestamp: now,
        place: { ...place },
      });

      // lastly, clear up current UI
      setSearchText("");
      setMessage("");
      inputRef.current?.blur();
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
          ref={inputRef}
          name="searchText"
          placeholder="Search by city/country. Eg.: Osaka, Zurich"
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
