import axios from "axios";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function CreatePlaylistButton(props) {
  return (
    <div className="content">
      <a href="https://accounts.spotify.com/authorize?client_id=b36ac668448643798290591e95096ff7&response_type=code&redirect_uri=https://verseatility.co">
        <button>Create Playlist</button>
      </a>
    </div>
  );
}

export default CreatePlaylistButton;
