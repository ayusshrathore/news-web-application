import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import General from "./components/General";
import Politics from "./components/Politics";
import Business from "./components/Business";
import Sports from "./components/Sports";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const App = () => {
	return (
		<>
			<Navbar />
			<Switch>
				<Route path={"/general"} component={General} />
				<Route path={"/politics"} component={Politics} />
				<Route path={"/sports"} component={Sports} />
				<Route path={"/business"} component={Business} />
				<Route path={"/"} component={Home} exact />
				<Redirect to={"/"} />
			</Switch>
			<Footer />
		</>
	);
};

export default App;
