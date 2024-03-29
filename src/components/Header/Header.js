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
							<svg
								width="25"
								height="27"
								viewBox="0 0 19 23"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g id="basket">
									<path
										id="Rectangle-10"
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M18.9474 6.85876H0V18.6482C0 20.8574 1.79086 22.6482 4 22.6482H14.9474C17.1565 22.6482 18.9474 20.8574 18.9474 18.6482V6.85876ZM4 21.1482C2.61929 21.1482 1.5 20.0289 1.5 18.6482V8.35876H17.4474V18.6482C17.4474 20.0289 16.3281 21.1482 14.9474 21.1482H4Z"
										fill="#FFFFFF"
									/>
									<path
										id="Rectangle-3"
										d="M6.01315 12.06V5.86806C6.01315 3.95686 7.56248 2.40753 9.47368 2.40753C11.3849 2.40753 12.9342 3.95686 12.9342 5.86806V12.06C12.9342 12.4742 13.27 12.81 13.6842 12.81C14.0984 12.81 14.4342 12.4742 14.4342 12.06V5.86806C14.4342 3.12844 12.2133 0.907532 9.47368 0.907532C6.73406 0.907532 4.51315 3.12844 4.51315 5.86806V12.06C4.51315 12.4742 4.84894 12.81 5.26315 12.81C5.67737 12.81 6.01315 12.4742 6.01315 12.06Z"
										fill="#FFFFFF"
									/>
								</g>
							</svg>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
		<br />
	</>
);

export default Header;
