import styled from "styled-components";

export const Button = styled.button`
  box-shadow: 0px 8px 12px 0px #0000001a;
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

  border: 2px solid white;
  border-radius: 00.875rem;
  transition: filter 100ms linear, background-color 100ms ease-out;
  -webkit-transition: -webkit-filter 100ms linear,
    -webkit-background-color 100ms ease-out;

  color: ${({ theme }) => theme.button.default.color};
  background-color: ${({ theme }) => theme.button.default.bgColor};
  opacity: ${({ theme }) => theme.button.default.opacity};

  &:hover {
    filter: ${({ theme }) => theme.button.default.hoverFilter};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const RoundedButton = styled(Button)`
  border-radius: 50%;
`;
