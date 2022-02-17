import axios from "axios";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Rating from "react-rating";
import "./RateSong.css";

function RateSong(props) {
  const defaultDisplayMessage = "How likely are you to sing this?";
  const warningMessage =
    "Please rate the song's Kareokeability before continuing!";
  // MAKE SURE TO CHANGE
  const [currRating, setCurrRating] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(defaultDisplayMessage);
  var buttonMessage = "Next";

  if (props.currentSongNumber == 9) {
    buttonMessage = "See Final Playlist";
  }

  console.log("currSong is:", props.currSong);
  console.log("currRating is:", currRating);
  return (
    <div className="pt-3">
      {/* <div className="song-list-container pt-3"> */}
      <div className="">
        <p className="main-text">{displayMessage}</p>
      </div>
      <div className="pb-4">
        <Rating
          emptySymbol={<img src="star-grey.png" className="star-icon " />}
          fullSymbol={<img src="star-gold.png" className="star-icon" />}
          initialRating={currRating}
          onChange={(rating) => {
            setCurrRating(rating);
          }}
        />
      </div>

      <button
        className="green-button"
        onClick={(e) => {
          if (currRating == 0) {
            setDisplayMessage(warningMessage);
          } else {
            const ratingData = {
              spotify_id: props.currSong[0],
              rating: (currRating * 2) / 10,
            };
            axios.post(
              "https://verseatility-backend.herokuapp.com/rating/",
              ratingData
            );
            console.log(
              "current song number in rate song is:",
              props.currentSongNumber
            );
            if (props.currentSongNumber == 9) {
              props.setCurrentView("PlaylistView");
            } else {
              props.setCurrentSongNumber(props.currentSongNumber + 1);
              setCurrRating(0);
              setDisplayMessage(defaultDisplayMessage);
            }
          }
        }}
      >
        {buttonMessage}
      </button>
    </div>
  );
}

export default RateSong;
