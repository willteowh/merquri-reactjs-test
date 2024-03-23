import { useContext, useCallback } from "react";

import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import { format } from "date-fns";
import { searchQueryType } from "../../types";
import { RoundedButton } from "../../styled/Button.styled";
import { ItemRow, ItemLabel, Text, Caption, ItemAction } from "./styled";
import { AppContext } from "../../AppProvider";

interface HistoryRowProps {
  index: number;
  data: searchQueryType;
}

const HistoryRow = ({ data, index }: HistoryRowProps) => {
  const { recentSearches, setRecentSearches, setPlace } =
    useContext(AppContext);

  const handleSearchAgain = useCallback(
    () => {
      const { place } = data;
      //  setPlace to trigger Search
      setPlace(place);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data]
  );

  const handleDelete = () => {
    const updatedSearches: searchQueryType[] = recentSearches.filter(
      (row) => row.id !== index
    );
    setRecentSearches(updatedSearches);
  };

  return (
    <ItemRow>
      <ItemLabel>
        <Text>
          {data.place.name}, {data.place.country}
        </Text>
        <Caption>{format(data.timestamp, "dd-MM-yyyy hh:mmaaa")}</Caption>
      </ItemLabel>
      <ItemAction>
        <RoundedButton onClick={handleSearchAgain}>
          <SearchIcon></SearchIcon>
        </RoundedButton>
        <RoundedButton onClick={handleDelete}>
          <DeleteIcon></DeleteIcon>
        </RoundedButton>
      </ItemAction>
    </ItemRow>
  );
};
export default HistoryRow;
