import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SocialShareItem.css";

function SocialShareItem(props) {
  //   const [loadingState, setLoadingState] = useState(true);
  var song = props.song;
  var songNumber = props.songNumber;

  return (
    <div className="row">
      <div className="col-4">
        <img src={song[3]} width="100%"></img>
      </div>
      <div className="col-8">
        <p className="social-share-green-text">{song[2]}</p>
        <p>{"#" + songNumber + " " + song[1]}</p>
      </div>
    </div>
  );
}

export default SocialShareItem;
