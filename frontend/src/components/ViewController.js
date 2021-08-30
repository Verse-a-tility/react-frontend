import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomeView.css";
import HomeView from "./HomeView";
import LoadingView from "./LoadingView";

function ViewController() {
  const [currentView, setCurrentView] = useState("HomeView");
  const [playlist, setPlaylist] = useState({});

  if (currentView == "HomeView") {
    console.log("AHHH");
    return (
      <HomeView setCurrentView={setCurrentView} setPlaylist={setPlaylist} />
    );
  }
  if (currentView == "LoadingView") {
    return (
      <LoadingView setCurrentView={setCurrentView} setPlaylist={setPlaylist} />
    );
  } else {
    return <p>Uh Oh</p>;
  }
}

export default ViewController;
