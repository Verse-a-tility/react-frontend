import axios from "axios";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function CreatePlaylistButton(props) {
  return (
    <div className="content">
      <button onClick={(e) => props.setCurrentView("LoadingView")}>
        Create Playlist
      </button>
    </div>
  );
}

export default CreatePlaylistButton;
