import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const theme = extendTheme({
  fonts: {
    body: "'Inter', sans-serif",
    heading: "'Inter', sans-serif",
  },
});

const ROOT = ReactDOM.createRoot(document.getElementById("root"));
ROOT.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
