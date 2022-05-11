import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";
export const Navbar = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getDataUser();
  }, []);
  let Signout = () => {
    actions.Sign_out();
  };
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container d-flex justify-content-between">
        <Link to="/">
          <span className="navbar-brand text-info mb-0 h5">
            <b>Dadivapp</b>
          </span>
        </Link>
        {!store.token ? (
          <div className="d-flex">
            <Link className="btn text-light bg-info m-2" to="/login">
              <b>Acceder</b>
            </Link>
            <Link className="btn text-light bg-info m-2" to="/signup">
              <b>Registrarse</b>
            </Link>
          </div>
        ) : (
          <div className="d-flex">
            <Link className="btn text-light bg-info m-2" to="/Profile">
              <b>Perfil</b>
            </Link>
            {store.dataUser?.role === 1 ? (
              <Link className="btn text-light bg-info m-2" to="/beneficiaries">
                <b>Proyectos</b>
              </Link>
            ) : null}
            {store.dataUser?.role === 2 ? (
              <Link className="btn text-light bg-info m-2" to="/donadores">
                <b>Donar</b>
              </Link>
            ) : null}
            <Link
              onClick={() => {
                Swal.fire({
                  title: "¿Estas seguro?",
                  text: "¿Quieres salir de la página?",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Si",
                }).then((result) => {
                  if (result.isConfirmed) {
                    Signout();
                    Swal.fire(
                      "¡Listo!",
                      "Vuelve a acceder para entrar",
                      "success"
                    );
                  }
                });
              }}
              className="btn text-light bg-info m-2"
              to="/"
            >
              <b>Salir</b>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
