import axios from "axios";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Rating from "react-rating";

function SongRatingList(props) {
  const [ratingResults, setRatingResults] = useState([]);
  const [displayMessage, setDisplayMessage] = useState(
    "Click submit to rate your playlist on its karaokeability!"
  );
  console.log("rating results is:", ratingResults);

  console.log(props.playlistSongs);
  const content = props.playlistSongs.map((song) => (
    <div>
      <h3>{song[1]}</h3>
      <Rating
        onChange={(rating) => {
          const editedRating = (rating * 2) / 10;
          const newRatingResults = ratingResults.concat([
            [song[0], editedRating],
          ]);
          setRatingResults(newRatingResults);
        }}
      />
    </div>
  ));
  return (
    <div>
      {content}
      <p>{displayMessage}</p>
      <button
        onClick={(e) => {
          ratingResults.map((ratingPair) => {
            const ratingData = {
              spotify_id: ratingPair[0],
              rating: ratingPair[1],
            };
            axios.post("http://localhost:8000/rating/", ratingData);
          });
          setRatingResults([]);
          setDisplayMessage(
            "Thank you for helping improve Verse-A-Tility! If you wish to change your ratings, rerate a song and then click submit again"
          );
        }}
      >
        Submit Ratings
      </button>
    </div>
  );
}

export default SongRatingList;
