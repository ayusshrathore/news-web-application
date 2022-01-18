import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div id="header">
			<div className="navbar">
				<Link to="/" className="nav-logo">
					The Morning Tribute
				</Link>
				<ul className={`${isOpen ? "nav-menu-active" : "nav-menu"}`}>
					<li className="nav-item">
						<Link
							to="/general"
							className="nav-link"
							onClick={() => setIsOpen(!isOpen)}
						>
							General
						</Link>
					</li>
					<li className="nav-item">
						<Link
							to="/politics"
							className="nav-link"
							onClick={() => setIsOpen(!isOpen)}
						>
							Politics
						</Link>
					</li>
					<li className="nav-item">
						<Link
							to="/sports"
							className="nav-link"
							onClick={() => setIsOpen(!isOpen)}
						>
							Sports
						</Link>
					</li>
					<li className="nav-item">
						<Link
							to="/business"
							className="nav-link"
							onClick={() => setIsOpen(!isOpen)}
						>
							Business
						</Link>
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
