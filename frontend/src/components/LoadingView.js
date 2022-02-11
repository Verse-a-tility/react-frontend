import axios from "axios";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LoadingView.css";
import Canvas from "./canvas.tsx";

function LoadingView(props) {
  //   const [loadingState, setLoadingState] = useState(true);
  console.log("in the top of loadingView");
  // console.log("access code is:", props.accessCode);

  const options = {};
  const client_id = "b36ac668448643798290591e95096ff7";
  //   UseEffect prevents this axios call from being called twice
  useEffect(() => {
    axios
      .get(
        "https://verseatility-backend.herokuapp.com/createPlaylist?code=" +
          props.accessCode,
        options
      )
      .then(function (response) {
        console.log(
          "Got into the axios call in the loading view's call to createPlaylist. Response is:",
          response.data
        );
        props.setCurrentView("FinishedLoadingView");
        props.setPlaylistSongs(response.data[1]);
        props.setPlaylistId(response.data[0][0]);
        console.log("playlist id in loading view is:", response.data[0][0]);
      });
  }, [props.accessCode]);

  return (
    <>
      <div className="container ">
        <div className="row text-center justify-content-center ">
          <div className="col-lg-6 col-10 ">
            <div className="loading-header">
              <h2 className="header-text pb-0">Hang Tight...</h2>
            </div>

            <p className="main-text">
              Our AI is working hard to generate the most karoakable playlist
              for you. Please don't refresh the page.
            </p>
          </div>
        </div>
      </div>
      <div className="sine-container pb-0">
        <Canvas />
      </div>
    </>
  );
}

export default LoadingView;
