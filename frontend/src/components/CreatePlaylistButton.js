import axios from "axios";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function CreatePlaylistButton(props) {
  return (
    <div className="content">
      {/* <a href="http://localhost:8000/login"> */}
      <button onClick={(e) => props.setCurrentView("LoadingView")}>
        Create Playlist
      </button>
      {/* </a> */}
    </div>
  );
}

export default CreatePlaylistButton;
