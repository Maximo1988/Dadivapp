import React from "react";

export const NewProject = () => {
  const [projectName, setProjectName] = React.useState("");
  const [fechaInicio, setFechaInicio] = React.useState("");
  const [fechaFinal, setFechaFinal] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [amount, setAmount] = React.useState("");

  const [error, setError] = React.useState(null);

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
