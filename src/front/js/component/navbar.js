import React, { useContext,useEffect } from "react";
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
        { !store.token ? (
          <div className="d-flex">
            <Link className="btn text-light bg-info m-2" to="/login">
              <b>Login</b>
            </Link>
            <Link className="btn text-light bg-info m-2" to="/signup">
              <b>Sign up</b>
            </Link>
          </div>
        ) : (
          <div className="d-flex">
            <Link className="btn text-light bg-info m-2" to="/Profile">
              <b>Profile</b>
            </Link>
           {store.dataUser?.role===1?
            <Link className="btn text-light bg-info m-2" to="/beneficiaries">
              <b>Beneficiaries</b>
            </Link>:null}
            <Link className="btn text-light bg-info m-2" to="/donadores">
              <b>Donations</b>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
