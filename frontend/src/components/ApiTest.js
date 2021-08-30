import axios from "axios";
import React, { useState, useEffect } from "react";

function ApiTest() {
  const [numUsers, setNumUsers] = useState(0);

  axios.get("http://localhost:8000/api/overallStats/").then((response) => {
    console.log(response);
  });

  return (
    <div className="App">
      <p>Nalu sucks</p>
      <a href="http://localhost:8000/login">
        <button>Click me!</button>
      </a>
    </div>
  );
}

export default ApiTest;
