import axios from "axios";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeViewDescription from "./HomeViewDescription";
import "./MadeBy.css";

function MadeBy() {
  return (
    <div className="container content">
      <div className="row">
        <div className="col-12">
          <p>
            Made by: <a href="https://danielknopf.com">Daniel Knopf</a>,
            <a href="https://www.linkedin.com/in/nalu-tripician-8b3691174/">
              Nalu Tripician
            </a>
            ,
            <a href="https://www.linkedin.com/in/isabel-wrubel-817203b2/">
              Isabel Wrubel
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MadeBy;
