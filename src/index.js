import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./firebase/firebase";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    background: #c7b5a7;
    font-family: custom 'Comfortaa', cursive;
    font-family: custom 'Dongle', sans-serif;
    font-family: custom 'Indie Flower', cursive;
    font-family: custom 'M PLUS Rounded 1c', sans-serif;
    font-family: custom 'Montserrat', sans-serif;
    font-family: custom 'Open Sans', sans-serif;
    font-family: custom 'Rajdhani', sans-serif;
    font-family: custom'Roboto', sans-serif;
  }
`;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
