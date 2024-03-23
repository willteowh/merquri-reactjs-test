import styled from "styled-components";
import { Button } from "../../styled/Button.styled";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const SearchInput = styled.input`
  background-color: ${({ theme }) => theme.shadedColor};
  color: ${({ theme }) => theme.fontColor.primary};
  padding: 15px 25px;
  border: 0px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  width: auto;
  flex: 1 1 0%;
`;

export const StyledButton = styled(Button)`
  background-color: ${({ theme }) =>
    theme.mode === "light" ? "rgba(108, 64, 181, 1)" : "rgba(40, 18, 77, 1)"};
  border-color: ${({ theme }) =>
    theme.mode === "light" ? "rgba(108, 64, 181, 1)" : "rgba(40, 18, 77, 1)"};
  color: #ffffff;
  opacity: 1;

  &:hover {
    filter: brightness(120%);
  }

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
