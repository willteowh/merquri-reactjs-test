import { StyledButton } from "./styled";
import SearchIcon from "@mui/icons-material/Search";

type SearchButtonProps = {
  onClick: () => void;
  isSearching: boolean;
};

export const SearchButton = ({ onClick, isSearching }: SearchButtonProps) => {
  return (
    <StyledButton onClick={onClick} disabled={isSearching}>
      <SearchIcon />
    </StyledButton>
  );
};
