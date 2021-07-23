import React from "react";
import "../css/home.css";
import body from "./images/news.jpg";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();
  const refresh = () => {
    window.location.reload(false);
  };
  return (
    <>
      <div className="container">
        <div id="item2">
          <h1>
            What's the <br /> News Today ?
          </h1>
          <p>
            Take some time and discover <br /> what's happening around the
            globe.
          </p>
          <div
            id="btn"
            onClick={() => {
              history.push("/general");
              refresh();
            }}
          >
            <span id="btn-txt">
              Read More &nbsp;&nbsp;
              <i className="fas fa-chevron-circle-right"></i>
            </span>{" "}
          </div>
        </div>
        <div id="item1">
          <img src={body} alt={"body"} />
        </div>
      </div>
    </>
  );
};

export default Home;
