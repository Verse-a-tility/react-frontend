import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./SocialShareItem.css";

function TestPage(props) {
  //   const [loadingState, setLoadingState] = useState(true);

  return (
    <div>
      <a href="instagram-stories://share?source_application=com.my.app">
        instagram test
      </a>
      <a href="instagram-stories://share?source_application=com.my.app?AssetPath=downloads/verse-a-tility.png">
        instagram test2
      </a>
      <a href="instagram-stories://share?source_application=com.my.app?AssetPath=verse-a-tility.png">
        instagram test3
      </a>
      <a href="instagram-stories://share?source_application=com.my.app?AssetPath=files/verse-a-tility.png">
        instagram test2
      </a>
    </div>
  );
}

export default TestPage;
