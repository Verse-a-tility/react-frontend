import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./LoadingSine.css";
import SineWaves from "sine-waves";

function LoadingSine(props) {
  // MAKE SURE TO CHANGE
  const [currRating, setCurrRating] = useState(0);
  //   const [displayMessage, setDisplayMessage] = useState(defaultDisplayMessage);
  //   var myEl = <canvas id="waves"></canvas>

  return (
    <>
      <div id="container">
        <canvas id="waves"></canvas>
        <script src="./loading.js"></script>
      </div>
    </>
  );
}

export default LoadingSine;
