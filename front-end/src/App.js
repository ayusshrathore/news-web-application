import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    useHistory,
} from "react-router-dom";
import { useEffect } from "react";
import Home from "./components/Home";
import General from "./components/General";
import Politics from "./components/Politics";
import Business from "./components/Business";
import Sports from "./components/Sports";
import news from "./components/newspaper.png";

const App = () => {
    let date = new Date();
    let dd = new Intl.DateTimeFormat("en-IN", {
        dateStyle: "full",
    }).format(date);
    const history = useHistory();
    const refresh = () => {
        window.location.reload(false);
    };
    return (
        <>
            <div id="header">
                <span>{dd}</span>
                <img src={news} alt={"news-logo"} /> &nbsp;
                <p>The News Glory</p>
                <br />
                <hr />
            </div>
            <div className="navbar">
                <div id="navbar-items">
                    <div
                        onClick={() => {
                            history.push("/");
                            refresh();
                        }}
                    >
                        <i className="fas fa-home"></i> Home
                    </div>
                    <div
                        onClick={() => {
                            history.push("/general");
                            refresh();
                        }}
                    >
                        <i className="far fa-file-alt"></i> General
                    </div>
                    <div
                        onClick={() => {
                            history.push("/politics");
                            refresh();
                        }}
                    >
                        <i className="fas fa-landmark"></i> Politics
                    </div>
                    <div
                        onClick={() => {
                            history.push("/sports");
                            refresh();
                        }}
                    >
                        <i className="fas fa-futbol"></i> Sports
                    </div>
                    <div
                        onClick={() => {
                            history.push("/business");
                            refresh();
                        }}
                    >
                        <i className="fas fa-business-time"></i> Business
                    </div>
                </div>
            </div>
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
            <div id="footer">
                <p>
                    View Source on &nbsp;
                    <a
                        href={
                            "https://github.com/ayush-rathore/news-web-application"
                        }
                    >
                        <i className="fab fa-github"></i> Github
                    </a>
                </p>
            </div>
        </>
    );
};

export default App;
