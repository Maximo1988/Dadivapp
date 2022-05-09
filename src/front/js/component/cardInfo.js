import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CardContainer from "./cardContainer";

export function CardInfo() {
  const { store, actions } = useContext(Context);

  return (
    <>
      {store.projects_all.map((project) => {
        <div key={project.name} className="col-md-3">
          <CardContainer
            nombre={project.name}
            Fecha_inicio={project.date_start}
            Fecha_final={project.date_finish}
            Descripcion={project.description}
            Monto_donado={project.donative_amount}
          />
        </div>;
        console.log(project);
      })}
    </>
  );
}

export default CardInfo;
