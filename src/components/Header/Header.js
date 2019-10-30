import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
	<>
		<nav className="navbar navbar-expand-md bg-dark navbar-dark">
			<Link className="navbar-brand" to="/">
				Synergy Way
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#collapsibleNavbar"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="collapsibleNavbar">
				<ul className="navbar-nav">
					<li className="nav-item">
						<Link className="nav-link" to="/shoppingcard">
							Shopping Card
						</Link>
					</li>
				</ul>
			</div>
		</nav>
		<br />
	</>
);

export default Header;
