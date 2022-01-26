import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomeView.css";
import HomeView from "./HomeView";
import LoadingView from "./LoadingView";
import RatingView from "./RatingView";

function ViewController() {
  const [currentView, setCurrentView] = useState("HomeView");
  const [playlistId, setPlaylistId] = useState("0IvjmmF4JolSbadyHg5rEr");
  const [playlistSongs, setPlaylistSongs] = useState([]);
  const [accessCode, setAccessCode] = useState("");
  // const [playlistSongs, setPlaylistSongs] = useState([
  //   ["5jkFvD4UJrmdoezzT1FRoP", "Rasputin"],
  //   ["0nDqJMKcSTtYlGK6OQ3sLC", "Kiss Me Thru The Phone"],
  // ]);

  if (currentView == "HomeView") {
    console.log("The view is home view");
    return (
      <HomeView setCurrentView={setCurrentView} setAccessCode={setAccessCode} />
    );
  }
  if (currentView == "LoadingView") {
    return (
      <LoadingView
        setCurrentView={setCurrentView}
        setPlaylistId={setPlaylistId}
        setPlaylistSongs={setPlaylistSongs}
        accessCode={accessCode}
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
