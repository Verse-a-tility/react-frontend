import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SocialShare.css";
import SocialShareItem from "./SocialShareItem";

function SocialShare(props) {
  var songs = props.infoArray[1];
  var displayName = props.infoArray[0][1];
  var karaokeability_score = props.infoArray[0][2];

  //   Turn the array into an array of two element arrays, so [song1, song2, song3, song4] -> [[song1, song2], [song3,song4]]
  const songRows = songs.reduce(function (rows, key, index) {
    return (
      (index % 2 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
      rows
    );
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="karaokeability-score-container">
          <p className="social-share-green-text social-share-bold-text display-name-text mb-1 pt-3">
            {displayName.slice(0, 30)}
          </p>
          <p className="social-share-library-score social-share-green-text social-share-bold-text pb-0 mb-0">
            My Spotify's Karaokeability Score
          </p>
          <p className="karaoke-score pb-0 mb-0">
            {karaokeability_score + "%"}
          </p>
          <p>My Top 10 Karaoke Songs</p>
        </div>
      </div>
      {songRows.map((row, index) => (
        <div className="row pb-4" key={index}>
          <div className="col-6">
            <SocialShareItem song={row[0]} songNumber={index + index + 1} />
          </div>
          <div className="col-6 ">
            <SocialShareItem song={row[1]} songNumber={index + index + 2} />
          </div>
        </div>
      ))}
      <div className="row justify-content-between align-items-center pt-5 pb-1">
        <div className="col-6">
          <div className="row align-items-center">
            <div className="col-5">
              <img src="Verse-a-tility_logo-transparent.png" width="100%"></img>
            </div>
            <div className="col-7 px-0">
              <p className="social-share-green-text social-share-bold-text mb-0">
                Verse-a-tility
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <p className="social-share-artist-text social-share-green-text mb-0">
            verseatility.co
          </p>
        </div>
      </div>
    </div>
  );
}

export default SocialShare;
