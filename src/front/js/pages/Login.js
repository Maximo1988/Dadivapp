import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

import Swal from "sweetalert2";

export const Login = () => {
  const { store, actions } = useContext(Context);
  let history = useHistory();

  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [error, setError] = React.useState(null);

  const [login, setLogin] = React.useState(false);

  const procesarDatos = (e) => {
    e.preventDefault();
    if (!email.trim() && !pass.trim()) {
      // console.log("Datos vacíos email!");
      setError("¡Datos vacíos!");
      return;
    }
    if (!pass.trim()) {
      // console.log("Datos vacíos pass!");
      setError("¡Completar Contraseña!");
      return;
    }
    if (pass.length < 6) {
      // console.log("el Password debe tener 6 o más carácteres");
      setError("El Password debe tener 6 o más caracteres");
      return;
    }
    // console.log("correcto...");
    setError(null);

    // setEmail(email.toLowerCase());
    console.log(email);
    actions.login(email, pass).then(() => {
      if (store.token) {
        Swal.fire("Acceso OK", "Usuario Encontrado", "success");
        history.push("/profile");
      } else {
        Swal.fire(e.msg, "Usuario no Encontrado", "error");
      }
    });
  };

  // const token = localStorage.getItem("token");
  // React.useEffect(() => {
  //   if (token) {
  //     return <Redirect to="/" />;
  //   }
  // }, [token]);

  return (
    <div className="mt-5">
      {store.token != "" ? <Redirect to="/" /> : null}

      <h3 className="text-center text-info">Acceso</h3>
      <hr />
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <form onSubmit={procesarDatos}>
            {error ? <div className="alert alert-danger">{error}</div> : null}

            <label className="mb-2">Ingresar Email</label>
            <input
              type="email"
              className="form-control mb-2"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            <label className="mb-2">Ingresar Contraseña</label>
            <input
              type="password"
              className="form-control mb-2"
              onChange={(e) => setPass(e.target.value)}
              value={pass}
            />
            <button
              className="btn btn-lg btn-info w-100 text-light"
              type="submit"
              onClick={() => setLogin(true)}
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
