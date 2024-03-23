import { useContext, useCallback } from "react";

import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import { format } from "date-fns";
import { searchQueryType } from "../../types";
import { RoundedButton } from "../../styled/Button.styled";
import { ItemRow, ItemLabel, Text, Caption, ItemAction } from "./styled";
import { AppContext } from "../../App";

type HistoryRowProps = {
  key: number;
  data: searchQueryType;
};

const HistoryRow = ({ data, key }: HistoryRowProps) => {
  const { recentSearches, setRecentSearches, setPlace } =
    useContext(AppContext);

  const handleSearchAgain = useCallback(
    (data: searchQueryType) => {
      console.log("handleSearchAgain");
      const { place } = data;
      setPlace(place);
    },
    [data]
  );

  const handleDelete = useCallback(
    (key: number) => {
      console.log("handleDelete");
      const updatedSearches: searchQueryType[] = recentSearches.filter(
        (_, i) => i !== key
      );
      setRecentSearches(updatedSearches);
    },
    [key]
  );

  return (
    <ItemRow>
      <ItemLabel>
        <Text>
          {data.place.name}, {data.place.country}
        </Text>
        <Caption>{format(data.timestamp, "dd-MM-yyyy hh:mmaaa")}</Caption>
      </ItemLabel>
      <ItemAction>
        <RoundedButton onClick={() => handleSearchAgain(data)}>
          <SearchIcon></SearchIcon>
        </RoundedButton>
        <RoundedButton onClick={() => handleDelete(key)}>
          <DeleteIcon></DeleteIcon>
        </RoundedButton>
      </ItemAction>
    </ItemRow>
  );
};
export default HistoryRow;
