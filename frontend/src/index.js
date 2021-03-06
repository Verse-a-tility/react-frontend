import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ViewController from "./components/ViewController";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./styles/globals.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import TestPage from "./components/TestPage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViewController />}></Route>
        {/* <Route path="/test" element={<TestPage />}></Route> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
