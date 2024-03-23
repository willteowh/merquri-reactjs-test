import styled from "styled-components";

export const WeatherContainer = styled.div`
  width: 100%;
  justify-content: space-between;
  position: relative;
  margin-bottom: 20px;
  line-height: 1.5;
  display: flex;
`;

export const IconDisplay = styled.img`
  position: absolute; /* Position the pseudo-element */
  top: -100px; /* Position at the top of the container */
  right: 0; /* Position at the right of the container */
  width: 250px; /* Set the width of the pseudo-element */
  height: 250px; /* Set the height of the pseudo-element */
  background-size: contain; /* Scale the background image to fit the dimensions of the pseudo-element */
  background-repeat: no-repeat; /* Prevent the background image from repeating */

  @media only screen and (max-width: 600px) {
    width: 200px;
    height: 200px;
    top: -45%; /* Position at the top of the container */
    right: -10%;
  }

  @media only screen and (max-width: 400px) {
    width: 150px;
    height: 150px;
  }
`;

export const TempContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TempTitle = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0px;
`;

export const TempDisplay = styled.span`
  font-size: 6em;
  display: block;
  color: ${({ theme }) => theme.fontColor.positive};
  font-weight: 700;
  line-height: 1;
`;

export const FigureContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  justify-content: flex-end;
  column-gap: 10%;

  @media only screen and (max-width: 600px) {
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
    flex-direction: column-reverse;
    justify-content: flex-start;
    text-align: right;
  }
`;
