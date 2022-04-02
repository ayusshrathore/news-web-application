import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const history = useHistory();
	const refresh = () => {
		window.location.reload(false);
	};

	return (
		<div id="header">
			<div className="navbar">
				<div
					className="nav-logo"
					onClick={() => {
						history.push("/");
						refresh();
					}}
				>
					The Morning Tribute
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
	);
};

export default Navbar;
