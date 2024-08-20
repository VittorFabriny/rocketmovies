import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/global";

import theme from "./styles/theme";

import { SignIn } from "./Pages/SignIn";
import { SignUp } from "./Pages/SignUp";

import { Home } from "./Pages/Home";
import { Create } from "./Pages/Create";
import { Preview } from "./Pages/Preview";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Preview />
    </ThemeProvider>
  </React.StrictMode>
);
