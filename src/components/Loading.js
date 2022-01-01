import React from "react";
import "../css/loading.css";
import loader from "./images/loader.svg";

const Loading = ({ visible }) => {
	if (!visible) return null;

	return (
		<div className="loading">
			<img id="loader" src={loader} alt="loader"></img>
		</div>
	);
};

export default Loading;
