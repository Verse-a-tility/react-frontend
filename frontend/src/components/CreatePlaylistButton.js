import axios from "axios";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CreatePlaylistButton.css";

function CreatePlaylistButton(props) {
  var scopes =
    "user-library-read user-library-modify user-top-read playlist-modify-private playlist-read-collaborative playlist-read-private playlist-modify-public";
  return (
    <div className="content">
      {/* <a href="https://accounts.spotify.com/authorize?client_id=b36ac668448643798290591e95096ff7&response_type=code&redirect_uri=http://localhost:3000"> */}
      {/* <a href="https://accounts.spotify.com/authorize?client_id=b36ac668448643798290591e95096ff7&response_type=code&scope=user-library-read user-library-modify user-top-read playlist-modify-private playlist-read-collaborative playlist-read-private playlist-modify-public&redirect_uri=https://verseatility.co"> */}
      <button
        className="green-button"
        onClick={(e) => {
          e.preventDefault();
          window.location.href =
            "https://accounts.spotify.com/authorize?client_id=b36ac668448643798290591e95096ff7&response_type=code&scope=user-library-read user-library-modify user-top-read playlist-modify-private playlist-read-collaborative playlist-read-private playlist-modify-public ugc-image-upload&redirect_uri=https://verseatility.co";
        }}
      >
        Create Playlist
      </button>
      {/* </a> */}
    </div>
  );
}

export default CreatePlaylistButton;
