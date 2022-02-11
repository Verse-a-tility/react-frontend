import axios from "axios";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RatingView.css";
// import SongRatingList from "./SongRatingList";
import RateSong from "./RateSong";

import Iframe from "react-iframe";

function RatingView(props) {
  const [currentSongNumber, setCurrentSongNumber] = useState(0);

  // TEMP
  // CHANGE PLAYLIST SONGS TO PROPS.PLAYLIST SONGS OR WHATEVER
  var playlistSongs = props.playlistSongs;
  // var playlistSongs = [
  //   ["5jkFvD4UJrmdoezzT1FRoP", "Rasputin", "Boney M."],
  //   ["0nDqJMKcSTtYlGK6OQ3sLC", "Kiss Me Thru The Phone", "Soulja Boy"],
  // ];
  console.log("currentSongNumber is:", currentSongNumber);
  if (currentSongNumber == 10) {
    props.setCurrentView("PlaylistView");
  }

  console.log("playlistSong Ids is:", props.playlistSongs);
  const oneIndexedSongNumber = currentSongNumber + 1;
  return (
    <div className="container content rating-container">
      <div className="row text-center justify-content-center rating-header-text">
        <div className="col-lg-6 col-12">
          <h2 className="header-text pb-0">
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
              width="300rem"
              height="380rem"
              display="initial"
            />
          </div>
        </div>
      </div>
      <div className="row text-center justify-content-center pt-2">
        <div className="col-lg-6 col-12">
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
