import React from "react";
import { NavLink } from "react-router-dom";


function NavBar2() {

	return (
		<div>
			<nav className="navbar navbar-expand-lg 
				bg-body-tertiary">
				<div className="container-fluid ">
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" ></span>
					</button>
					
					<div className="collapse navbar-collapse"
						id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<NavLink className="nav-link"
									aria-current="page" to={`/`}>
									Home
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to={`/Entertainment`}>
									Entertainment
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to={`/Technology`}>
									Technology
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to={`/Sports`}>
									Sports
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to={`/Business`}>
									Business
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to={`/Health`}>
									Health
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to={`/Science`}>
									Science
								</NavLink>
							</li>
						</ul>
					</div>
					</div>
			</nav>
		</div>
	);
}

export default NavBar2;
