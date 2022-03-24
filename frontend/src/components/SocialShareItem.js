import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SocialShareItem.css";

function SocialShareItem(props) {
  var song = props.song;
  var songNumber = props.songNumber;

  // Get the width that the text will be
  function textWidth(text, fontProp) {
    var tag = document.createElement("div");
    tag.style.position = "absolute";
    tag.style.left = "-99in";
    tag.style.whiteSpace = "nowrap";
    tag.style.font = fontProp;
    tag.innerHTML = text;

    document.body.appendChild(tag);
    var result = tag.clientWidth;
    document.body.removeChild(tag);
    return result;
  }
  //   Check if song/artist will overflow, and then manually slice the string and add ellipses
  //   HTML2Canvas can't handle text-overflow so setting text-overflow: ellipsis doesn't work for creating the image
  //   TextBoxWidth being 108 is a rough estimate of the size of the text box. It is 108 on iphone 8 and 113 on iphone 12 pro, so not too much change

  var artistText = song[2];
  var songText = "#" + songNumber + " " + song[1];
  var songTextWidth = textWidth(
    songText,
    "font-weight:500; font-size: 0.8rem;"
  );
  var artistTextWidth = textWidth(artistText, "font-size: 0.65rem;");
  var textBoxWidth = 108;

  if (songTextWidth > textBoxWidth) {
    var percentCanFit = textBoxWidth / songTextWidth;
    var newLength = Math.floor(songText.length * percentCanFit) - 1;
    songText = songText.slice(0, newLength) + "...";
  }
  if (artistTextWidth > textBoxWidth) {
    var percentCanFit = textBoxWidth / artistTextWidth;
    var newLength = Math.floor(artistText.length * percentCanFit);
    artistText = artistText.slice(0, newLength) + "...";
  }

  return (
    <div className="row align-items-center">
      <div className="col-4 art-div">
        <img src={song[3]} width="100%"></img>
      </div>
      <div className="col-8 song-text-div ">
        <p className="social-share-green-text social-share-artist-text mb-0">
          {artistText}
        </p>
        <p
          className="social-share-black-text social-share-song-text mb-0"
          id="song-text"
        >
          {songText}
        </p>
      </div>
    </div>
  );
}

export default SocialShareItem;
