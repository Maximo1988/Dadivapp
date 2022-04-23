import React from "react";
// import "./../../styles/benprofile.css";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

export const BenProfile = (props) => {
  return (
    <div className="container">
      <header>
        <div className="card mb-3 mt-5">
          <img
            src="https://i.picsum.photos/id/186/1000/200.jpg?hmac=pUloMIHoVy5yEh3svncyKFFHH1NW97CSBFGuAO3lQ1Q"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body text-center">
            <h5 className="card-title">
              {props.firstName} {props.lastName}
            </h5>
            <p className="card-text">{props.role}</p>
          </div>{" "}
        </div>
      </header>
      <div className="d-flex justify-content-around">
        <nav>
          <a className="navbar-brand" href="#">
            Profile
          </a>
        </nav>
        <nav>
          <a className="navbar-brand" href="#">
            Proyects
          </a>
        </nav>
        <nav>
          <a className="navbar-brand" href="#">
            New Proyect
          </a>
        </nav>
      </div>
    </div>
  );
};

BenProfile.props = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  role: PropTypes.string,
};
