import { useState, useContext } from "react";
import { AppContext } from "../../App";
import { GEO_API_URL } from "../../api";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "../../styled/Button.styled";
import { SearchContainer, SearchInput } from "./styled";

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

      // TODO: display Weather info
      setPlace(place);

      // also, record Search History
      addRecentSearch({
        place: { ...place },
        timestamp: new Date(),
      });

      // empty search
      setSearchForm(emptySearchForm);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event: any) => {
    setSearchForm((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      doSearch();
      return;
    }
  };

  return (
    <SearchContainer>
      <SearchInput
        name="city"
        placeholder="Type to search for weather. Eg.: Singapore, Kuala Lumpur"
        value={searchForm.city}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      ></SearchInput>
      <Button onClick={doSearch}>
        <SearchIcon></SearchIcon>
      </Button>
    </SearchContainer>
  );
};

export default SearchComponent;
