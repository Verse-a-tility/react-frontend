import axios from "axios";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RatingView.css";
import SongRatingList from "./SongRatingList";

import Iframe from "react-iframe";

function RatingView(props) {
  console.log("playlistSong Ids is:", props.playlistSongs);

  return (
    <div className="container content">
      <div className="row text-center justify-content-center">
        <div className="col-lg-6 col-12">
          <h2>View Your Playlist!</h2>
          <div className="playlist-iframe-container">
            <Iframe
              className="playlist-iframe"
              url={
                "https://open.spotify.com/embed/playlist/" + props.playlistId
              }
              width="300px"
              height="380px"
              display="initial"
            />
          </div>
          <SongRatingList playlistSongs={props.playlistSongs} />
        </div>
      </div>
    </div>
  );
}

export default RatingView;
