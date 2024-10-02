import React from "react";
import ReactDOM from "react-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HomePage from "./HomePage";

const theme = createTheme({
  palette: {
    background: {
      default: "#EEE0CB",
    },
    primary: {
      main: "#5C4033",
    },
    secondary: {
      main: "#7A6A5D",
    },
    interaction: {
      main: "#839788",
    },
    details: {
      main: "#BAA898",
    },
  },
  typography: {
    fontFamily: '"Noto Sans", sans-serif',
    h1: {
      fontFamily: '"Fira Code", monospace',
      fontSize: "2.25rem",
      fontWeight: "bold",
    },
    h2: {
      fontFamily: '"Fira Code", monospace',
      fontSize: "1.6rem",
    },
    medium: {
      fontWeight: 500,
    },
    bold: { fontWeight: "bold" },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <HomePage />
  </ThemeProvider>,
  document.getElementById("root")
);
