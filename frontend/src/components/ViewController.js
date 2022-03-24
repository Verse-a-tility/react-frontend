import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomeView.css";
import HomeView from "./HomeView";
import LoadingView from "./LoadingView";
import FinishedLoadingView from "./FinishedLoadingView";
import RatingView from "./RatingView";
import PlaylistView from "./PlaylistView";
import ErrorView from "./ErrorView";
import "../styles/globals.css";

function ViewController() {
  var testInfoArray = [
    ["4epoIIEt7dRd0PLOBhDCwd", "TestUser", 36],
    [
      [
        "5jkFvD4UJrmdoezzT1FRoP",
        "Sweet Home Alabama",
        "Boney M.",
        "https://i.scdn.co/image/ab67616d0000b27320b467550945fd123e00f0a5",
      ],
      [
        "0nDqJMKcSTtYlGK6OQ3sLC",
        "Kiss Me Thru The Phone",
        "Soulja Boy",
        "https://i.scdn.co/image/ab67616d0000b273768828c6867cd0472fc84e4d",
      ],
      [
        "5jkFvD4UJrmdoezzT1FRoP",
        "Sweet Home ahhhhh",
        "Boney M.",
        "https://i.scdn.co/image/ab67616d0000b27320b467550945fd123e00f0a5",
      ],
      [
        "0nDqJMKcSTtYlGK6OQ3sLC",
        "Kiss Me Thru The adasdas",
        "Soulja Boy",
        "https://i.scdn.co/image/ab67616d0000b273768828c6867cd0472fc84e4d",
      ],
      [
        "5jkFvD4UJrmdoezzT1FRoP",
        "Sweet Home ahhhhh",
        "Panic at the Disco",
        "https://i.scdn.co/image/ab67616d0000b27320b467550945fd123e00f0a5",
      ],
      [
        "0nDqJMKcSTtYlGK6OQ3sLC",
        "Kiss Me Thru The adasdas",
        "I DONT KNOW HOW BUT THEY FOUND ME",
        "https://i.scdn.co/image/ab67616d0000b273768828c6867cd0472fc84e4d",
      ],
      [
        "5jkFvD4UJrmdoezzT1FRoP",
        "Sweet Home ahhhhh",
        "Boney M.",
        "https://i.scdn.co/image/ab67616d0000b27320b467550945fd123e00f0a5",
      ],
      [
        "0nDqJMKcSTtYlGK6OQ3sLC",
        "Kiss Me Thru The adasdas",
        "Soulja Boy",
        "https://i.scdn.co/image/ab67616d0000b273768828c6867cd0472fc84e4d",
      ],
      [
        "5jkFvD4UJrmdoezzT1FRoP",
        "Almost Closing Time",
        "Boney M.",
        "https://i.scdn.co/image/ab67616d0000b27320b467550945fd123e00f0a5",
      ],
      [
        "0nDqJMKcSTtYlGK6OQ3sLC",
        "Closing Time",
        "Soulja Boy",
        "https://i.scdn.co/image/ab67616d0000b273768828c6867cd0472fc84e4d",
      ],
    ],
  ];
  const [currentView, setCurrentView] = useState("HomeView");

  const [infoArray, setInfoArray] = useState(testInfoArray);
  const [accessCode, setAccessCode] = useState("");
  const [errorType, setErrorType] = useState("");

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
        setInfoArray={setInfoArray}
        setErrorType={setErrorType}
        accessCode={accessCode}
      />
    );
  }
  if (currentView == "FinishedLoadingView") {
    return <FinishedLoadingView setCurrentView={setCurrentView} />;
  }
  if (currentView == "RatingView") {
    return <RatingView setCurrentView={setCurrentView} infoArray={infoArray} />;
  }
  if (currentView == "PlaylistView") {
    return (
      <PlaylistView setCurrentView={setCurrentView} infoArray={infoArray} />
    );
  }
  if (currentView == "ErrorView") {
    return <ErrorView setCurrentView={setCurrentView} errorType={errorType} />;
  } else {
    return <p>Uh Oh</p>;
  }
}

export default ViewController;
