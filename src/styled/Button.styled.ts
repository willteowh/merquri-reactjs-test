import styled from "styled-components";

export const Button = styled.button`
  box-shadow: 0px 4px 12px 0px #0000001a;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;

  outline: 0;
  margin: 0;
  border: 0;
  padding: 8px;

  flex: 0 0 auto;
  color: rgba(0, 0, 0, 0.5);

  cursor: pointer;
  margin-left: 8px;

  border-radius: 0.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.shadedColor3};
  }
`;

export const RoundedButton = styled(Button)`
  border-radius: 50%;
`;
