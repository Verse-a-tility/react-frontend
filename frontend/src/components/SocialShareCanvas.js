import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./SocialShareCanvas.css";

function SocialShareCanvas(props) {
  //   const [loadingState, setLoadingState] = useState(true);
  //   var songs = props.playlistSongs;
  var songs = [
    [
      "5jkFvD4UJrmdoezzT1FRoP",
      "Sweet Home Alabama",
      "Boney M.",
      "https://i.scdn.co/image/ab67616d0000b27320b467550945fd123e00f0a5",
    ],
    [
      "0nDqJMKcSTtYlGK6OQ3sLC",
      "Kiss Me Thru The Phone",
      "Soulja Boy",
      "https://i.scdn.co/image/ab67616d0000b273768828c6867cd0472fc84e4d",
    ],
  ];

  const canvasRef = useRef(null);
  const loadImage = async (img, songNumber, context) => {
    return new Promise((resolve, reject) => {
      img.onload = async () => {
        console.log("Image Loaded.");
        var xPos = 50 + (songNumber % 2) * 50;
        var yPos = 50 + (songNumber % 2) * 50;
        context.drawImage(img, xPos, yPos, 10, 10);
        context.fillText(
          "#" + songNumber + " " + songs[songNumber][1],
          xPos + 10,
          yPos
        );

        resolve(true);
      };
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    var currX = 0;
    var currY = 0;
    songs.map(async function (song, songNumber) {
      console.log("song nymber at top of map is:", songNumber);
      var myImage = new Image();
      myImage.src = song[3];
      await loadImage(myImage, songNumber, context);
      console.log("image number:", songNumber);
    });
  }, []);

  return (
    <canvas id="social-share-canvas" ref={canvasRef}>
      Fallback Content{" "}
    </canvas>
  );
}

export default SocialShareCanvas;
