import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { StateContextProvider } from "../context/StateContext.jsx";
import { BiberContextProvider } from "../context/BiberContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StateContextProvider>
    <BiberContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BiberContextProvider>
  </StateContextProvider>,
);
