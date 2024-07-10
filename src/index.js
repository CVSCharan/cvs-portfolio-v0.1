import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AppBarProvider from "./context/AppBarContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppBarProvider>
        <App />
      </AppBarProvider>
    </BrowserRouter>
  </React.StrictMode>
);
