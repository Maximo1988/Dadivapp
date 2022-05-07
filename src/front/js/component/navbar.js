import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export const Navbar = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getDataUser(store.token);
  }, [store.token]);
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
              <b>Acceso</b>
            </Link>
            <Link className="btn text-light bg-info m-2" to="/signup">
              <b>Registro</b>
            </Link>
          </div>
        ) : (
          <div className="d-flex">
            <Link className="btn text-light bg-info m-2" to="/Profile">
              <b>Perfil</b>
            </Link>
            {store.dataUser?.role === 2 ? (
              <Link className="btn text-light bg-info m-2" to="/beneficiaries">
                <b>Beneficiarios</b>
              </Link>
            ) : null}
            <Link className="btn text-light bg-info m-2" to="/donadores">
              <b>Donaciones</b>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
