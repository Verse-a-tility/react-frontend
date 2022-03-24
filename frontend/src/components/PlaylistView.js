import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PlaylistView.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialShare from "./SocialShare";
import html2canvas from "html2canvas";

// import SongRatingList from "./SongRatingList";

import Iframe from "react-iframe";

function PlaylistView(props) {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  const [loadedImage, setLoadedImage] = useState(<div></div>);
  var playlistId = props.infoArray[0][0];

  useEffect(() => {
    console.log("Converting HTML to canvas");
    const toScreenshot = document.getElementById("social-share");
    html2canvas(toScreenshot, {
      allowTaint: true,
      useCORS: true,
      backgroundColor: "#ecfbf1",
    }).then((canvas) => {
      var image = new Image();
      image.src = canvas.toDataURL();
      var mySrc = canvas.toDataURL();
      setLoadedImage(<img src={mySrc} width="100%"></img>);
      document.getElementById("social-share").style.display = "none";

      // var link = document.createElement("a");
      // link.download = "verse-a-tility.png";
      // link.href = canvas.toDataURL();
      // link.click();
    });
  }, []);

  const handleOnClick = () => {
    console.log("IN SHARE CLICK");
    console.log(navigator.share);
    if (navigator.share) {
      const toScreenshot = document.getElementById("social-share");
      html2canvas(toScreenshot, {
        allowTaint: true,
        useCORS: true,
        backgroundColor: "#ecfbf1",
      }).then((canvas) => {
        // var link = document.createElement("a");
        // link.download = "verse-a-tility.png";
        // link.href = canvas.toDataURL();
        // link.click();

        canvas.toBlob(function (blob) {
          var url = URL.createObjectURL(blob);
          console.log("url is:", url);
          var myFile = new File([blob], "image.png", { type: blob.type });

          if (navigator.canShare({ files: [myFile] })) {
            navigator
              .share({
                files: [myFile],
                // title: "Verse-a-tility",
                // text: `Check out my top 10 most karaokeable songs—created by Verse-a-tility`,
                // url: "https://open.spotify.com/playlist/" + playlistId,
              })
              .then(() => {
                console.log("Successfully shared");
              });
          } else {
            var link = document.createElement("a");
            link.download = "verse-a-tility.png";
            link.href = canvas.toDataURL();
            link.click();
          }
        });
        // console.log("type of image is:", typeof image);
        // navigator
        //   .share({
        //     files: [canvas.toBlob()],
        //     title: "Verse-a-tility",
        //     text: `Check out my top 10 most karaokeable songs—created by Verse-a-tility`,
        //     // url: "https://open.spotify.com/playlist/" + playlistId,
        //   })
        //   .then(() => {
        //     console.log("Successfully shared");
        //   });
        // .catch((error) => {
        //   console.error("Something went wrong sharing the image", error);
        // });
      });
    } else {
      navigator.clipboard.writeText(
        "https://open.spotify.com/playlist/" + playlistId
      );
      toast("Playlist Link Copied!");
    }
  };
  if (isMobile) {
    return (
      <>
        <div id="social-share">
          <SocialShare infoArray={props.infoArray} />
        </div>
        <div className="container content">
          <div className="row justify-content-center">
            <div className="col-11 text-center">
              <p className="main-text social-share-bold-text">
                Click{" "}
                <a href={"https://open.spotify.com/playlist/" + playlistId}>
                  here
                </a>{" "}
                for your full playlist!
                <br />
              </p>
              <p className="playlist-sharing-text">
                Hold down on this image to save it and share with your friends!
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-10">{loadedImage}</div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <div className="container content">
          <div className="row text-center justify-content-center">
            <div className="col-lg-6 col-12 playlist-text-container">
              <h2 className="header-text">Your Final Playlist</h2>
              <p className="main-text">
                Start planning your next karaoke night, because these songs were
                picked to impress
              </p>
            </div>
          </div>
          <div className="row text-center justify-content-center pt-1">
            <div className="col-lg-6 col-12">
              <div className="playlist-iframe-container">
                <Iframe
                  className="playlist-iframe"
                  url={"https://open.spotify.com/embed/playlist/" + playlistId}
                  width="100%"
                  height="100%"
                  display="initial"
                />
              </div>
            </div>
          </div>

          <div className="row text-center justify-content-center">
            <div className="col-lg-6 col-12 share-container">
              <button
                className="green-button"
                id="share-button"
                onClick={handleOnClick}
              >
                Share
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  // return (
  //   <div className="container content">
  //     <div className="row text-center justify-content-center">
  //       <div className="col-lg-6 col-12">
  //         <h2>
  //           #{oneIndexedSongNumber} {playlistSongs[currentSongNumber][1]}
  //         </h2>
  //         <h3>By {playlistSongs[currentSongNumber][2]}</h3>
  //         <div className="playlist-iframe-container">
  //           <Iframe
  //             className="playlist-iframe"
  //             url={
  //               "https://open.spotify.com/embed/playlist/" + props.playlistId
  //             }
  //             width="300px"
  //             height="380px"
  //             display="initial"
  //           />
  //         </div>
  //         <SongRatingList playlistSongs={props.playlistSongs} />
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default PlaylistView;
