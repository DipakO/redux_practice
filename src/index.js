import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CounterContext from "./context/CounterContext";
import Store from "./App/Store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
    <React.StrictMode>
      <CounterContext>
        <App />
      </CounterContext>
    </React.StrictMode>
  </Provider>
);
