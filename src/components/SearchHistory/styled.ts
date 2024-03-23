import styled from "styled-components";

export const SearchHistoryContainer = styled.div`
  background-color: ${({ theme }) => theme.shadedColor};
  border-radius: 24px;
  padding: 10px 20px;
`;

export const ItemRow = styled.div`
  background-color: ${({ theme }) => theme.shadedColor4};
  border-radius: 16px;
  padding: 10px 20px;
  margin-bottom: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
`;

export const ItemLabel = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  flex-grow: 1;

  /* mobile css */
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ItemAction = styled.div`
  display: flex;
  align-items: center;
`;

export const Heading = styled.h2`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 20px;
`;
