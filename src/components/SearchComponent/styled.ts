import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const SearchInput = styled.input`
  background-color: ${({ theme }) => theme.shadedColor};
  color: ${({ theme }) => theme.fontColor.primary};
  padding: 10px 20px;
  border: 0px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  width: auto;
  flex: 1 1 0%;
`;
