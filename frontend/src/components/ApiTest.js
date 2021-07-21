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
    </div>
  );
}

export default ApiTest;
