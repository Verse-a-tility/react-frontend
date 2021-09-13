import axios from "axios";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function LoadingView(props) {
  //   const [loadingState, setLoadingState] = useState(true);
  console.log("in the top of loadingView");

  const options = {};
  //   UseEffect prevents this axios call from being called twice
  useEffect(() => {
    axios
      .get(
        "https://verseatility-backend.herokuapp.com/createPlaylist/",
        options
      )
      .then(function (response) {
        console.log(
          "Got into the axios call in the loading view's call to createPlaylist. Response is:",
          response.data
        );
        props.setCurrentView("RatingView");
        props.setPlaylistSongs(response.data[1]);
        props.setPlaylistId(response.data[0][0]);
      });
  }, []);

  return (
    <div className="container">
      <div className="row text-center justify-content-center">
        <div className="col-lg-6 col-12">
          <h2>Loading</h2>
        </div>
      </div>
    </div>
  );
}

export default LoadingView;
