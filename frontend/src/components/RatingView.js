import axios from "axios";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RatingView.css";
// import SongRatingList from "./SongRatingList";
import RateSong from "./RateSong";
import { useNavigate } from "react-router-dom";

import Iframe from "react-iframe";

function RatingView(props) {
  console.log("info array is:", props.infoArray[1].length);
  var playlistSongs = props.infoArray[1];

  const [currentSongNumber, setCurrentSongNumber] = useState(
    playlistSongs.length - 1
  );
  const navigate = useNavigate();
  // Remove the access code from the url
  useEffect(() => {
    navigate("/");
  }, []);

  // TEMP
  // CHANGE PLAYLIST SONGS TO PROPS.PLAYLIST SONGS OR WHATEVER
  // var playlistSongs = props.playlistSongs;
  // var playlistSongs = [
  //   ["5jkFvD4UJrmdoezzT1FRoP", "Sweet Home Alabama", "Boney M."],
  //   ["0nDqJMKcSTtYlGK6OQ3sLC", "Kiss Me Thru The Phone", "Soulja Boy"],
  // ];
  console.log(
    "currentSongNumber is:",
    currentSongNumber,
    "and playlistSoongs,.length is:",
    playlistSongs.length
  );
  if (currentSongNumber < 0) {
    console.log("in current song number = playlistsoings.length ");
    props.setCurrentView("PlaylistView");
    return <div></div>;
  }

  const oneIndexedSongNumber = currentSongNumber + 1;
  console.log("one indexed song number is:", oneIndexedSongNumber);
  return (
    <div className="container content">
      <div className="row text-center justify-content-center">
        <div className="col-lg-6 col-12  rating-header-text">
          <h2 className="header-text pb-0 mb-0">
            #{oneIndexedSongNumber} {playlistSongs[currentSongNumber][1]}
          </h2>
          <p className="main-text">By {playlistSongs[currentSongNumber][2]}</p>

          {/* <SongRatingList playlistSongs={props.playlistSongs} /> */}
        </div>
      </div>
      <div className="row text-center justify-content-center pt-4 rating-iframe">
        <div className="col-lg-6 col-12 justify-content-center text-center">
          <div className="song-iframe-container">
            <Iframe
              className="song-iframe"
              url={
                "https://open.spotify.com/embed/track/" +
                playlistSongs[currentSongNumber][0]
              }
              width="100%"
              height="100%"
              display="initial"
            />
          </div>
        </div>
      </div>
      <div className="row text-center justify-content-center pt-2">
        <div className="col-lg-6 col-12 rating-container">
          <RateSong
            currentSongNumber={currentSongNumber}
            currSong={playlistSongs[currentSongNumber]}
            setCurrentSongNumber={setCurrentSongNumber}
            setCurrentView={props.setCurrentView}
          />
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className="container content">
  //     <div className="row text-center justify-content-center">
  //       <div className="col-lg-6 col-12">
  //         <h2>
  //           #{oneIndexedSongNumber} {playlistSongs[currentSongNumber][1]}
  //         </h2>
  //         <h3>By {playlistSongs[currentSongNumber][2]}</h3>
  //         <div className="playlist-iframe-container">
  //           <Iframe
  //             className="playlist-iframe"
  //             url={
  //               "https://open.spotify.com/embed/playlist/" + props.playlistId
  //             }
  //             width="300px"
  //             height="380px"
  //             display="initial"
  //           />
  //         </div>
  //         <SongRatingList playlistSongs={props.playlistSongs} />
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default RatingView;
