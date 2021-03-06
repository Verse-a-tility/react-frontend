import axios from "axios";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomeView.css";
import HomeViewDescription from "./HomeViewDescription";
import MadeBy from "./MadeBy";
import CreatePlaylistButton from "./CreatePlaylistButton";

function HomeView(props) {
  const [numUsers, setNumUsers] = useState(0);

  const url = window.location.href;
  const queries = url.split("=");
  const code = queries[queries.length - 1];
  // console.log("code is:", code);
  // console.log("queries is:", queries);
  if (queries.length > 1) {
    props.setAccessCode(code);
    props.setCurrentView("LoadingView");
  }

  return (
    <>
      <div className="HomeViewContent container">
        <div className="row text-center justify-content-center">
          <div className="col-lg-6 col-12">
            <h1 className="header-text pb-4">What's My Best Karaoke Song?</h1>
            <HomeViewDescription />
            <CreatePlaylistButton setCurrentView={props.setCurrentView} />
            <MadeBy />
          </div>
        </div>
        {/* <button
          onClick={() => {
            const ratingData = {
              spotify_id: "7o9uu2GDtVDr9nsR7ZRN73",
              rating: 0.5,
            };
           
            axios
              .post("https://verseatility-backend.herokuapp.com/song/", {
                spotify_id: "2QTDuJIGKUjR7E2Q6KupIh",
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
          }}
        >
          SONG
        </button>
        <button
          onClick={() => {
            const ratingData = {
              spotify_id: "7o9uu2GDtVDr9nsR7ZRN73",
              rating: 0.5,
            };
            axios
              .post(
                "https://verseatility-backend.herokuapp.com/rating/",
                ratingData
              )
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
          }}
        >
          RATING
        </button> */}
      </div>
    </>
  );
}

export default HomeView;
