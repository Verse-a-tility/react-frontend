import axios from "axios";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ErrorView.css";

function ErrorView(props) {
  var authErrorText =
    "It seems Spotify was unable to authenticate your account. Please give it another shot, or email us at dknopf@wesleyan.edu if it doesn't work again. We need your help to improve!";
  const [errorText, setErrorText] = useState(authErrorText);
  //   const [loadingState, setLoadingState] = useState(true);
  console.log("in the top of ErrorView");

  return (
    <div className="container">
      <div className="row text-center justify-content-center">
        <div className="col-lg-6 col-10">
          <div className="loading-header">
            <h2 className="header-text ">Uh Oh!</h2>
          </div>

          <p className="main-text">{errorText}</p>
        </div>
      </div>
      <div className="row text-center justify-content-center">
        <div className="col-lg-6 col-12">
          <div className="py-3">
            <button
              className="green-button"
              onClick={(e) => props.setCurrentView("HomeView")}
            >
              Try Again!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorView;
