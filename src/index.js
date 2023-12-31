import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ContextTheme from "./Components/ContextTheme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextTheme>
      <App />
    </ContextTheme>
  </React.StrictMode>
);
