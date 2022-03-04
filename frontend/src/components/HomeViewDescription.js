import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomeViewDescription.css";

function HomeViewDescription() {
  return (
    <div className="container content">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-12">
          <p className="main-text">
            Never know what to sing when you’re out for karaoke night?
            Verse-a-tility, an AI-generated algorithm, will determine a playlist
            of perfectly karaokeable songs for you, according to your Spotify
            taste.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeViewDescription;
