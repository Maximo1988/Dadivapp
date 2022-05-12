import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Profile_Form = (props) => {
  const { store, actions } = useContext(Context);
  const [modoEdicion, setModoEdicion] = useState(true);

  const editar = () => {
    setModoEdicion(true);
  };

  const guardar = () => {
    setModoEdicion(false);
  };

  return (
    <div className="text-center mt-4">
      <form>
        <div className="form-group row d-flex justify-content-center mt-2">
          <div className="col-sm-3">
            <input
              type="email"
              className="form-control"
              id="colFormLabel"
              placeholder="Email"
              disabled={true}
              value={store.dataUser?.email}
            />
          </div>
        </div>

        <div className="form-group row d-flex justify-content-center mt-2">
          <div className="col-sm-3">
            <input
              type="nombre"
              className="form-control"
              id="colFormLabel"
              placeholder="Nombre"
              disabled={true}
              value={store.dataUser?.first_name}
            />
          </div>
        </div>

        <div className="form-group row d-flex justify-content-center mt-2">
          <div className="col-sm-3">
            <input
              type="apellido"
              className="form-control"
              id="colFormLabel"
              placeholder="Apellido"
              disabled={true}
              value={store.dataUser?.last_name}
            />
          </div>
        </div>

        <div className="form-group row d-flex justify-content-center mt-2">
          <div className="col-sm-3">
            <input
              type="direccion"
              className="form-control"
              id="colFormLabel"
              placeholder="Dirección"
              disabled={true}
              value={store.dataUser?.address}
            />
          </div>
        </div>

        <div className="form-group row d-flex justify-content-center mt-2">
          <div className="col-sm-3">
            <input
              type="telefono"
              className="form-control"
              id="colFormLabel"
              placeholder="Teléfono"
              disabled={modoEdicion ? false : true}
              value={store.dataUser?.phone}
            />
          </div>
        </div>

        <div className="form-group row d-flex justify-content-center mt-2">
          <div className="col-sm-3">
            <input
              type="documento"
              className="form-control"
              id="colFormLabel"
              placeholder="Documento"
              disabled={modoEdicion ? false : true}
              value={store.dataUser?.documento}
            />
          </div>
        </div>

        <div className="form-group row d-flex justify-content-center mt-2">
          <div className="col-sm-3">
            <input
              type="paypal-link"
              className="form-control"
              id="colFormLabel"
              placeholder="Paypal-link"
              disabled={true}
              value={store.dataUser?.paypal_link}
            />
          </div>
        </div>
      </form>

      <div className="container-fluid d-flex col-md-3 mt-4">
        {!modoEdicion ? (
          <button className="btn btn-dark btn-block" onClick={() => editar()}>
            Editar
          </button>
        ) : (
          <button
            className="btn btn-info btn-block text-light"
            onClick={() => guardar()}
          >
            Guardar
          </button>
        )}
      </div>
    </div>
  );
};
