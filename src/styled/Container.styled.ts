import styled from "styled-components";

export const StyledDisplay = styled.div`
  background-color: ${({ theme }) => theme.shadedColor};
  border: ${({ theme }) => theme.shadedBorder};
  border-radius: 40px;
  padding: 20px 40px;
  position: relative;
  margin-top: 20%;
`;
