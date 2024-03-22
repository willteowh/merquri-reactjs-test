import { useState, useContext } from "react";
import { GEO_API_URL } from "../../api";
import SearchIcon from "@mui/icons-material/Search";
import "./style.css";
import { AppContext } from "../../App";

const emptySearchForm = {
  city: "",
  country: "",
};

const SearchComponent = () => {
  const { setPlace, addRecentSearch } = useContext(AppContext);
  const [searchForm, setSearchForm] = useState(emptySearchForm);

  const doSearch = async () => {
    console.log({ ...searchForm });

    // validation
    if (searchForm.city.trim() === "" && searchForm.city.trim() === "") {
      return;
    }

    // fetch from api
    try {
      let response = await (
        await fetch(`${GEO_API_URL}&q=${searchForm.city}`)
      ).json();

      console.log(response);

      if (response.length === 0) {
        // TODO: if no result found for the city, display error message and return
      }

      const place = response[0];

      // TODO: display Weahter info
      setPlace(place);

      // also, record Search History
      addRecentSearch({
        place: { ...place },
        timestamp: new Date(),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleInput = (event) => {
    if (event.key === "Enter") {
      doSearch();
    }

    setSearchForm((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <div className="search-container">
      <input
        className="search-location-input"
        type="text"
        name="city"
        placeholder="Type to search for weather. Eg.: Singapore, Kuala Lumpur"
        value={searchForm.city}
        onInput={(event) => handleInput(event)}
      ></input>
      <button className="btn btn-square" onClick={doSearch}>
        <SearchIcon></SearchIcon>
      </button>
    </div>
  );
};

export default SearchComponent;
