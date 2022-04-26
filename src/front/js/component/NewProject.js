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
      <h3 className="text-center mb-3">New Proyect</h3>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <form onSubmit={procesarDatos}>
            <label className="mb-2">Project Name</label>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Project Name"
              onChange={(e) => setProjectName(e.target.value)}
              value={projectName}
            />
            <label className="mb-2">Start Date</label>
            <input
              type="Datetime-local"
              className="form-control mb-2"
              placeholder="start date"
              onChange={(e) => setFechaInicio(e.target.value)}
              value={fechaInicio}
            />
            <label className="mb-2">Final Date</label>
            <input
              type="Datetime-local"
              className="form-control mb-2"
              placeholder="Final date"
              onChange={(e) => setFechaFinal(e.target.value)}
              value={fechaFinal}
            />
            <label className="mb-2">Description</label>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            <label className="mb-2">amount to donate</label>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Amount to donate"
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
            />
            {error ? <div className="alert alert-danger">{error}</div> : null}
            <button
              className="btn btn-lg btn-dark btn-block w-100"
              type="submit"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
