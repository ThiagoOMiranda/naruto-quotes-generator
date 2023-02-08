import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { App } from "./pages";
import { GlobalStyle } from "./components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);
