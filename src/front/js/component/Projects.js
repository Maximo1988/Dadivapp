import React, { useEffect, useContext } from "react";
import { CardContainer } from "./cardContainer";
import { Context } from "../store/appContext";
import { NewProject } from "./NewProject";

export const Projects = () => {
  const { store, actions } = useContext(Context);
  console.log(store.Projects_benef)
  return (
    <div className="container row">
      {store.Projects_benef.length === 0 ? (
        <h5>No tienes ningun proyecto aun</h5>
      ) : (
        store.Projects_benef.map((project_benef, index) => {
          console.log(project_benef)
          return (
            <div
              key={index}
              className="col-12 col-sm-12 col-md-6 col-lg-4 my-3  "
            >
              <CardContainer Name={project_benef.name} Date_finish={project_benef.date_finish} Date_start={project_benef.date_start} Donative_amount={project_benef.donative_amount} Description={project_benef.description} notButtonDonate={true} />
            </div>
          );
        })
      )}
    </div>
  );
};
