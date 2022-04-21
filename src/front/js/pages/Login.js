import React from "react";

export const Login = () => {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [error, setError] = React.useState(null);

  const procesarDatos = (e) => {
    e.preventDefault();
    if (!email.trim() && !pass.trim()) {
      // console.log("Datos vacíos email!");
      setError("Datos vacíos!");
      return;
    }
    if (!pass.trim()) {
      // console.log("Datos vacíos pass!");
      setError("Completar Password!");
      return;
    }
    if (pass.length < 6) {
      // console.log("el Password debe tener 6 o más carácteres");
      setError("el Password debe tener 6 o más carácteres");
      return;
    }
    // console.log("correcto...");
    setError(null);
  };

  return (
    <div className="mt-5">
      <h3 className="text-center">Login</h3>
      <hr />
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <form onSubmit={procesarDatos}>
            {error ? <div className="alert alert-danger">{error}</div> : null}

            <label className="mb-2">Ingresar Email</label>
            <input
              type="email"
              className="form-control mb-2"
              placeholder="Prueba@prueba.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            <label className="mb-2">Ingresar Password</label>
            <input
              type="password"
              className="form-control mb-2"
              placeholder="******"
              onChange={(e) => setPass(e.target.value)}
              value={pass}
            />
            <button
              className="btn btn-lg btn-dark btn-block w-100"
              type="submit"
            >
              LogIn
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
