import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";

export const NewProject = (props) => {
  const [projectName, setProjectName] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFinal, setFechaFinal] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState(null);
  const store = useContext(Context);

  const procesarDatos = (e) => {
    e.preventDefault();
    if (
      !projectName.trim() ||
      !fechaInicio.trim() ||
      !fechaFinal.trim() ||
      !description.trim() ||
      !amount.trim()
    ) {
      setError("completar todos los datos");
    }
  };
const clearForm=()=>{
  setProjectName("")
  setFechaInicio("")
  setFechaFinal("")
  setDescription("")
  setAmount("")

}
  const crearProyecto = () => {
    store.actions
      .projects_create(projectName, fechaFinal, description, amount)
      .then(() => {
        if (store.projectoBeneficiario) {
          Swal.fire(
            "Error en la creación del proyecto",
            `${store.projectoBeneficiario}`,
            "error"
          );
        } else {
          Swal.fire("Proyecto Registrado", "¡Gracias!", "success")
          .then((result) => {
            if (result.isConfirmed) {
           store.actions.projectoBeneficiario_close_modal()
           clearForm()
           props.setpage("projects")
            }
            })
        }
      });
  };

  return (
    <div className="mt-5">
      <h3 className="text-center mb-3">Ingresa </h3>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <form onSubmit={procesarDatos}>
            <label className="mb-2">Nombre</label>
            <input
              type="text"
              className="form-control mb-2"
              onChange={(e) => setProjectName(e.target.value)}
              value={projectName}
            />
            <label className="mb-2">Fecha de Inicio</label>
            <input
              type="Datetime-local"
              className="form-control mb-2"
              onChange={(e) => setFechaInicio(e.target.value)}
              value={fechaInicio}
            />
            <label className="mb-2">Fecha de Finalización</label>
            <input
              type="Datetime-local"
              className="form-control mb-2"
              onChange={(e) => setFechaFinal(e.target.value)}
              value={fechaFinal}
            />
            <label className="mb-2">Descripción</label>
            <input
              type="text"
              className="form-control mb-2"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            <label className="mb-2">Cantidad a Donar</label>
            <input
              type="text"
              className="form-control mb-2"
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
            />
            {error ? <div className="alert alert-danger">{error}</div> : null}
            <button
              className="btn btn-lg btn-dark btn-block w-100"
              onClick={() => crearProyecto()}
              type="submit"
            >
              Registrar Proyecto
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
