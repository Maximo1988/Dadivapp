import React, { useContext, useEffect } from "react";
// import "./../../styles/benprofile.css";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";
import { Projects } from "../component/Projects";
import { NewProject } from "../component/NewProject";

export const Beneficiaries = () => {
  const { store, actions } = useContext(Context);
  const [page, setPage] = React.useState("projects");
  useEffect(() => {
    actions.getDataUser(store.token);
  }, []);

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
              {store.dataUser?.first_name} {store.dataUser?.last_name}
            </h5>
            <p className="card-text">
              {store.dataUser?.role === 1 ? "Donador" : "Beneficiario"}
            </p>
          </div>{" "}
        </div>
      </header>
      <div className="d-flex justify-content-around">
        <button className="btn btn-primary" onClick={() => setPage("projects")}>
          Proyectos
        </button>
        <button
          className="btn btn-primary"
          onClick={() => setPage("NewProject")}
        >
          Nuevo Proyecto
        </button>
      </div>
      <hr />
      <div className="mt-3">
        {page == "projects" ? <Projects /> : null}
        {page == "NewProject" ? <NewProject /> : null}
      </div>
    </div>
  );
};

Beneficiaries.props = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  role: PropTypes.string,
};
