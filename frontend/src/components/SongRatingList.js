import axios from "axios";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Rating from "react-rating";
import "./SongRatingList.css";

function SongRatingList(props) {
  const [ratingResults, setRatingResults] = useState([]);
  const [currentRatingDict, setCurrentRatingDict] = useState({});
  const [displayMessage, setDisplayMessage] = useState(
    "Click submit to rate your playlist on its karaokeability!"
  );
  console.log("rating results is:", ratingResults);

  console.log(props.playlistSongs);
  const songList = props.playlistSongs.map((song) => (
    <div className="py-2">
      <h5>{song[1]}</h5>
      <div className="colored-star">
        <Rating
          emptySymbol="fa fa-star-o fa-2x"
          fullSymbol="fa fa-star fa-2x"
          initialRating={currentRatingDict[song[0]]}
          onChange={(rating) => {
            const editedRating = (rating * 2) / 10;
            const newRatingResults = ratingResults.concat([
              [song[0], editedRating],
            ]);
            var tempDict = currentRatingDict;
            tempDict[song[0]] = rating;
            setCurrentRatingDict(tempDict);
            setRatingResults(newRatingResults);
          }}
        />
      </div>
    </div>
  ));
  return (
    <div className="pt-4">
      <h3>Rate Songs</h3>
      <p>
        Verse-A-Tility relies on user data to help us improve our algorithm, so
        let us know what you think of your playlist! Rate each song from 1-5
        based on how well you think it could be belted out at karaoke!
      </p>
      <div className="song-list-container pt-3">
        {songList}
        <div className="py-2">
          <p>{displayMessage}</p>
        </div>

        <button
          onClick={(e) => {
            ratingResults.map((ratingPair) => {
              const ratingData = {
                spotify_id: ratingPair[0],
                rating: ratingPair[1],
              };
              axios.post(
                "https://verseatility-backend.herokuapp.com/rating/",
                ratingData
              );
            });
            setRatingResults([]);
            setCurrentRatingDict({});
            setDisplayMessage(
              "Thank you for helping improve Verse-A-Tility! If you wish to change your ratings, rerate a song and then click submit again"
            );
          }}
        >
          Submit Ratings
        </button>
      </div>
    </div>
  );
}

export default SongRatingList;
