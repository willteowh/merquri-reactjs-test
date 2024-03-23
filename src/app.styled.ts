import styled, { createGlobalStyle } from "styled-components";
import { Theme } from "./theme";

declare module "styled-components" {
  /* tslint:disable */
  export interface DefaultTheme extends Theme {}
}

export const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap");

  html {
    font-size: 16px;
    font-family: "Noto Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    display: flex;
    justify-content: center;
    min-height: 100vh;
    background: url(${({ theme }) => theme.backgroundImage}) center;
    background-size: auto;
  }

  #root {
    width: 100%;
    max-width: 900px;
    margin: auto 0px;
    padding: 2rem 1rem;
  }
`;
