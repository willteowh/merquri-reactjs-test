import { createGlobalStyle } from "styled-components";
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

    color: ${({ theme }) => theme.fontColor.default}
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
    max-width: 800px;
    margin: auto 0px;
    padding: 2rem 1rem;
  }

  input{
  line-height: 1.5;
  outline: none;
  }

  /* some minor styling */
    .font-bold {
    font-weight: 700;
    }

    .font-smaller{
        font-size: smaller;
    }

    .font-color-primary{
        color: ${({ theme }) => theme.fontColor.primary}
    }
    .font-color-secondary{
        color: ${({ theme }) => theme.fontColor.secondary}
    }
    .font-color-positive{
        color: ${({ theme }) => theme.fontColor.positive}
    }

`;
