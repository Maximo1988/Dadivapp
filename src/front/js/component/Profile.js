import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Profile = (props) => {
  const [modoEdicion, setModoEdicion] = React.useState(false);

  const editar = () => {
    setModoEdicion(true);
  };

  const guardar = () => {
    setModoEdicion(false);
  };

  return (
    <div className="text-center">
      <form>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input
              type="text"
              readOnly
              className="form-control-plaintext"
              id="staticEmail"
              disabled={modoEdicion ? false : true}
              value={props.email}
            />
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">First Name</label>
            <div className="col-sm-10">
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                id="staticEmail"
                disabled={true}
                value={props.firstName}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Last Name</label>
            <div className="col-sm-10">
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                id="staticEmail"
                disabled={true}
                value={props.lastName}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Address</label>
            <div className="col-sm-10">
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                id="staticEmail"
                disabled={true}
                value={props.addres}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Phone</label>
            <div className="col-sm-10">
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                id="staticEmail"
                disabled={true}
                value={props.phone}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Document</label>
            <div className="col-sm-10">
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                id="staticEmail"
                disabled={true}
                value={props.document}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Paypal Link</label>
            <div className="col-sm-10">
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                id="staticEmail"
                disabled={true}
                value={props.paypalLink}
              />
            </div>
          </div>
        </div>
      </form>
      {!modoEdicion ? (
        <button className="btn btn-dark btn-block" onClick={() => editar()}>
          Editar
        </button>
      ) : (
        <button className="btn btn-dark btn-block" onClick={() => guardar()}>
          Guardar
        </button>
      )}
    </div>
  );
};
