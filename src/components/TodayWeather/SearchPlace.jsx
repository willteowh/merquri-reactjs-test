import { useState } from "react";
import { GEO_API_URL } from "../../api";

const emptySearchForm = {
  city: "",
  country: "",
};

const SearchPlace = ({ foundPlace }) => {
  const [searchForm, setSearchForm] = useState(emptySearchForm);

  const handleSearch = async (event) => {
    event.preventDefault();

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

      // TODO: display Weahter info
      foundPlace(response[0]);
      // setWeatherInfo({ ...searchForm });
    } catch (error) {
      console.error(error);
    }
  };

  const resetForm = () => {
    setSearchForm(emptySearchForm);
  };

  return (
    <div>
      <form onSubmit={(event) => handleSearch(event)}>
        <div>
          <span>City</span>
          <input
            type="text"
            name="city"
            placeholder="Eg.: Johor Bahru, Kuala Lumpur, etc"
            value={searchForm.city}
            onChange={(event) =>
              setSearchForm((prev) => {
                return {
                  ...prev,
                  [event.target.name]: event.target.value,
                };
              })
            }
          ></input>
        </div>
        <div>
          <span>Country</span>
          <input
            type="text"
            name="country"
            placeholder="Eg.: Malaysia, Singapore"
            value={searchForm.country}
            onChange={(event) =>
              setSearchForm((prev) => {
                return {
                  ...prev,
                  [event.target.name]: event.target.value,
                };
              })
            }
          ></input>
        </div>
        <div>
          <button type="submit">Search</button>
          <button type="button" onClick={resetForm}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchPlace;
