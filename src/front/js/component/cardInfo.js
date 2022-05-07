import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CardContainer from "./cardContainer";

const CardInfo = () => {
  const { store, actions } = useContext(Context);
  // const comments = [
  //   {
  //     Header: "Nombre",
  //     Info: "Nombre del proyecto",
  //     Description: "Cuanto dinero necesita/resumen",
  //     extraDescription: "Descripcion larga del proyecto",
  //   },
  //   {
  //     Header: "Nombre",
  //     Info: "Nombre del proyecto",
  //     Description: "Cuanto dinero necesita/resumen",
  //     extraDescription: "Descripcion larga del proyecto",
  //   },
  //   {
  //     Header: "Nombre",
  //     Info: "Nombre del proyecto",
  //     Description: "Cuanto dinero necesita/resumen",
  //     extraDescription: "Descripcion larga del proyecto",
  //   },
  //   {
  //     Header: "Nombre",
  //     Info: "Nombre del proyecto",
  //     Description: "Cuanto dinero necesita/resumen",
  //     extraDescription: "Descripcion larga del proyecto",
  //   },
  // ];
  return (
    <div className="container">
      <div className="row">
        {store.projects_all.map((project) => {
          <div key={project.name} className="col">
            <CardContainer
              nombre={project.name}
              Fecha_inicio={project.date_start}
              Fecha_final={project.date_finish}
              Descripcion={project.description}
              Monto_donado={project.donative_amount}
            />
          </div>;
        })}
      </div>
    </div>
  );
};

export default CardInfo;
