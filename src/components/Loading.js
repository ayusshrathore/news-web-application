import React from "react";
import "../css/loading.css";

const Loading = ({ visible }) => {
	if (!visible) return null;

	return (
		<div className="loading">
			<img id="loader" src="./images/loader.svg" alt="loader"></img>
		</div>
	);
};

export default Loading;
