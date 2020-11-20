import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import JumboVideo from "../images/JumboVideo.mp4";

class JumboTron extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid style={{ height: "80vh" }}>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{
              position: "relative",

              width: "100%",
              height: "80vh",
              zIndex: "0",
              overflow: "hidden",
            }}
          >
            <video
              src={JumboVideo}
              autoPlay
              muted
              loop
              style={{ position: "relative", width: "100%" }}
            ></video>
          </div>

          <div
            className="pl-5"
            style={{
              position: "absolute",
              zIndex: "5",
              top: "30%",
              color: "#fff",
            }}
          >
            <h2>Hello World</h2>
            <p>This is some text</p>

            <button className="mr-2 btn btn-danger">Blabla</button>
            <button className="mr-2 btn btn-danger">Blabla</button>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default JumboTron;
