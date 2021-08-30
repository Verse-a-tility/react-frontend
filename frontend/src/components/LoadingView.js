import axios from "axios";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function LoadingView(props) {
  const [loadingState, setLoadingState] = useState(true);

  const options = {};
  axios
    .get("http://localhost:8000/createPlaylist", options)
    .then(function (response) {
      props.setCurrentView("DisplayView");
      props.setPlaylistSongs(response.data.songs);
      props.setPlaylistId(response.data.ID);
    });

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
