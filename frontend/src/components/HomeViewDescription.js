import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomeViewDescription.css";

function HomeViewDescription() {
  return (
    <div className="container content">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-12">
          <p>
            This is verse-a-tility, a website that will create a playlist of the
            most karaokeale songs in your Spotify library! Simply click the
            "create playlist" button below and let our magic algorithm do its
            work! <br /> This website is currently in Beta, so be gentle :)
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeViewDescription;
