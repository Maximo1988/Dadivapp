import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav  className="navbar navbar-light bg-light">
			<div className="container d-flex justify-content-between">
				<Link to="/">
					<span className="navbar-brand text-info mb-0 h5"><b>Dadivapp</b></span>
				</Link>

				<div className="d-flex">
					<div className="px-3">
						<button className="btn text-light bg-info"><b>Login</b></button>
					</div>
					<Link to="/demo">
						<button className="btn text-light bg-info"><b>Sign up</b></button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
