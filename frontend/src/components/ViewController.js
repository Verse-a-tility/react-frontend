import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomeView.css";
import HomeView from "./HomeView";
import LoadingView from "./LoadingView";
import RatingView from "./RatingView";

function ViewController() {
  const [currentView, setCurrentView] = useState("RatingView");
  const [playlistId, setPlaylistId] = useState("0IvjmmF4JolSbadyHg5rEr");
  const [playlistSongs, setPlaylistSongs] = useState([
    ["5jkFvD4UJrmdoezzT1FRoP", "Rasputin"],
    ["0nDqJMKcSTtYlGK6OQ3sLC", "Kiss Me Thru The Phone"],
  ]);

  if (currentView == "HomeView") {
    console.log("AHHH");
    return <HomeView setCurrentView={setCurrentView} />;
  }
  if (currentView == "LoadingView") {
    return (
      <LoadingView
        setCurrentView={setCurrentView}
        setPlaylist={setPlaylistId}
        setPlaylistSongs={setPlaylistSongs}
      />
    );
  }
  if (currentView == "RatingView") {
    return (
      <RatingView
        setCurrentView={setCurrentView}
        playlistId={playlistId}
        playlistSongs={playlistSongs}
      />
    );
  } else {
    return <p>Uh Oh</p>;
  }
}

export default ViewController;
