import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
}

*:focus {
  outline: none ;
  box-shadow: inset 0px 0px 0px 2px white;

}

body {
  color: ${({ theme }) => theme.mainTextColor};
  background-color: #2c3338;
  margin: 0;
  color: ${({ theme }) => theme.mainTextColor};
  background-color: ${({ theme }) => theme.mainBackgroundColor};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;


export const darkTheme = {
  mainBackgroundColor: "#2c3338",
  asideBackgroundColor: "#1d2327",
  mainTextColor: "white",
};

export const lightTheme = {
  mainBackgroundColor: "#e2dcd8",
  asideBackgroundColor: "#d3ccc7",
  mainTextColor: "dark",
};
