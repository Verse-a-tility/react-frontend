import axios from "axios";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FinishedLoadingView.css";

function FinishedLoadingView(props) {
  //   const [loadingState, setLoadingState] = useState(true);
  console.log("in the top of loadingView");

  const options = {};
  //   UseEffect prevents this axios call from being called twice

  return (
    <div className="container">
      <div className="row text-center justify-content-center">
        <div className="col-lg-6 col-10">
          <div className="loading-header">
            <h2 className="header-text ">The Results Are In</h2>
          </div>

          <p className="main-text">
            Let’s walk through and take a look at your Top 10 Karoake Songs
          </p>
        </div>
      </div>
      <div className="row text-center justify-content-center">
        <div className="col-lg-6 col-12">
          <div className="py-3">
            <button onClick={(e) => props.setCurrentView("RatingView")}>
              I'm Ready to Sing!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinishedLoadingView;
