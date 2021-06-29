import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home";
import General from "./components/General";
import news from "./components/images/newspaper.png";

const App = () => {
  let date = new Date();
  let dd = new Intl.DateTimeFormat("en-IN", {
    dateStyle: "full",
  }).format(date);
  return (
    <>
      <div id="header">
        <span>{dd}</span>
        <img src={news} alt={"news-logo"} /> &nbsp;
        <p>The News Glory</p>
        <br />
        <hr />
      </div>
      <Router>
        <Switch>
          <Route path={"/general"} exact>
            <General />
          </Route>
          <Route path={"/"}>
            <Home />
          </Route>
          <Route path={"/**"}>
            <Redirect to={"/"} />
          </Route>
        </Switch>
      </Router>
      <div id="footer">
        <p>
          View Source on &nbsp; <i className="fab fa-github"></i> Github
        </p>
      </div>
    </>
  );
};

export default App;
