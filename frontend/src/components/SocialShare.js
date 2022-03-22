import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SocialShare.css";
import SocialShareItem from "./SocialShareItem";

function SocialShare(props) {
  //   const [loadingState, setLoadingState] = useState(true);
  //   var songs = props.playlistSongs;
  var displayName = "@NaluTripician";
  var songs = [
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
  ];
  const songRows = songs.reduce(function (rows, key, index) {
    return (
      (index % 2 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
      rows
    );
  }, []);
  console.log(songRows);
  var karaokeability_score = 25;

  return (
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="karaokeability-score-container">
          <p className="main-text social-share-green-text">{displayName}</p>
          <p className="header-text social-share-green-text">
            Your Library's Karaoke Score
          </p>
          <p className="karaoke-score">{karaokeability_score + "%"}</p>
        </div>
      </div>
      {songRows.map((row, index) => (
        <div className="row">
          <div className="col-6">
            <SocialShareItem song={row[0]} songNumber={index} />
          </div>
          <div className="col-6">
            <SocialShareItem song={row[1]} songNumber={index + 1} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default SocialShare;
