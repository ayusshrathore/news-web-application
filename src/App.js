import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";
import Home from "./components/Home";
import General from "./components/General";
import Politics from "./components/Politics";
import Business from "./components/Business";
import Sports from "./components/Sports";
import { useState } from "react";

const App = () => {
  const history = useHistory();
  const refresh = () => {
    window.location.reload(false);
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div id="header">
        <div className="navbar">
          <div
            className="nav-logo"
            onClick={() => {
              history.push("/");
              refresh();
            }}
          >
            The Post
          </div>
          <ul className={`${isOpen ? "nav-menu-active" : "nav-menu"}`}>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => {
                  history.push("/general");
                  refresh();
                }}
              >
                General
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => {
                  history.push("/politics");
                  refresh();
                }}
              >
                Politics
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => {
                  history.push("/sports");
                  refresh();
                }}
              >
                Sports
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => {
                  history.push("/business");
                  refresh();
                }}
              >
                Business
              </div>
            </li>
          </ul>
          <div
            className={`${isOpen ? "hamburger-active" : "hamburger"}`}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
      <>
        <Router>
          <Switch>
            <Route path={"/general"} exact>
              <General />
            </Route>
            <Route path={"/politics"} exact>
              <Politics />
            </Route>
            <Route path={"/sports"} exact>
              <Sports />
            </Route>
            <Route path={"/business"} exact>
              <Business />
            </Route>
            <Route path={"/"}>
              <Home />
            </Route>
            <Route path={"/**"}>
              <Redirect to={"/"} />
            </Route>
          </Switch>
        </Router>
      </>
      <div id="footer">
        <p>
          View Source on &nbsp;
          <a href={"https://github.com/ayush-rathore/news-web-application"}>
            <i className="fab fa-github"></i> Github
          </a>
        </p>
      </div>
    </>
  );
};

export default App;
