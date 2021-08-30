import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ApiTest from "./components/ApiTest";
import reportWebVitals from "./reportWebVitals";
import ViewController from "./components/ViewController";

ReactDOM.render(
  <React.StrictMode>
    <ViewController />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
