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
      margin: 0px;
      background: url(${({ theme }) => theme.backgroundImage}) center;
      background-size: auto;
  }

  #root {
      width: 100%;
      max-width: 700px;
      margin: auto 0px;
      padding: 2rem 1rem;
  }

  input{
      line-height: 1.5;
      font-size: 1.25rem;
      outline: none;

      &::placeholder {
        color: white;
        opacity: 0.5;
      }

  }

  /* some minor styling */
  .font-bold {
      font-weight: 700;
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
