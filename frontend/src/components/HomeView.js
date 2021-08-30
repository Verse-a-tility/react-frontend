import axios from "axios";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomeView.css";
import HomeViewDescription from "./HomeViewDescription";
import MadeBy from "./MadeBy";
import CreatePlaylistButton from "./CreatePlaylistButton";

function HomeView(props) {
  const [numUsers, setNumUsers] = useState(0);

  return (
    <div className="HomeViewContent container">
      <div className="row text-center justify-content-center">
        <div className="col-lg-6 col-12">
          <h2>Welcome to Verse-A-Tility!</h2>
          <HomeViewDescription />
          <CreatePlaylistButton setCurrentView={props.setCurrentView} />
          <MadeBy />
        </div>
      </div>
    </div>
  );
}

export default HomeView;
