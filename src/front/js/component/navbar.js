import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container d-flex justify-content-between">
        <Link to="/">
          <span className="navbar-brand text-info mb-0 h5">
            <b>Dadivapp</b>
          </span>
        </Link>

        <div className="d-flex">
          <Link className="btn text-light bg-info m-2" to="/login">
            <b>Login</b>
          </Link>
          <Link className="btn text-light bg-info m-2" to="/signup">
            <b>Sign up</b>
          </Link>
        </div>
      </div>
    </nav>
  );
};
