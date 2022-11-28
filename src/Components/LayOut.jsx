import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { CssBaseline } from "@mui/material";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const theme = createTheme();

export default function LayOut() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </ThemeProvider>
  );
}
