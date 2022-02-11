import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PlaylistView.css";
// import SongRatingList from "./SongRatingList";

import Iframe from "react-iframe";

function PlaylistView(props) {
  // TEMP
  // CHANGE PLAYLISTID SONGS TO PROPS.PLAYLIST SONGS OR WHATEVER
  var playlistId = props.playlistId;
  console.log("playlistId in playlistview is", playlistId);
  //   playlistId = "0IvjmmF4JolSbadyHg5rEr";

  const handleOnClick = () => {
    console.log("IN SHARE CLICK");
    console.log(navigator.share);
    if (navigator.share) {
      navigator
        .share({
          title: "Verse-a-tility",
          text: `Check out my top 10 most karaokeable songs—created by Verse-a-tility`,
          url: "https://open.spotify.com/playlist/" + playlistId,
        })
        .then(() => {
          console.log("Successfully shared");
        })
        .catch((error) => {
          console.error("Something went wrong sharing the blog", error);
        });
    }
  };

  return (
    <div className="container content">
      <div className="row text-center justify-content-center">
        <div className="col-lg-6 col-12">
          <h2 className="header-text py-4">Your Final Playlist</h2>
          <p className="main-text">
            Start planning your next karoake night, because these songs were
            picked to impress
          </p>
        </div>
      </div>
      <div className="row text-center justify-content-center pt-1">
        <div className="col-lg-6 col-12">
          <div className="playlist-iframe-container">
            <Iframe
              className="playlist-iframe"
              url={"https://open.spotify.com/embed/playlist/" + playlistId}
              width="300"
              height="380"
              display="initial"
            />
          </div>
        </div>
      </div>
      <div className="row text-center justify-content-center pt-5">
        <div className="col-lg-6 col-12">
          <button onClick={handleOnClick}>Share</button>
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

export default PlaylistView;
