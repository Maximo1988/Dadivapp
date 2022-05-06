import React,{useContext} from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Profile_Form = (props) => {
  const { store, actions } = useContext(Context);
  const [modoEdicion, setModoEdicion] = React.useState(false);

  const editar = () => {
    setModoEdicion(true);
  };

  const guardar = () => {
    setModoEdicion(false);
  };

  return (
    <div className="text-center ">
      <form>
        <div className="form-group row d-flex justify-content-center ">
          <label className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-6">
            <input
              type="text"
              readOnly
              className="form-control-plaintext"
              id="staticEmail"
              disabled={modoEdicion ? false : true}
              value={store.dataUser?.email}
            />
          </div>
          <div className="form-group row d-flex justify-content-center">
            <label className="col-sm-2 col-form-label">First Name</label>
            <div className="col-sm-6">
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                id="staticEmail"
                disabled={true}
                value={store.dataUser?.first_name}
              />
            </div>
          </div>
          <div className="form-group row d-flex justify-content-center">
            <label className="col-sm-2 col-form-label">Last Name</label>
            <div className="col-sm-6">
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                id="staticEmail"
                disabled={true}
                value={store.dataUser?.last_name}
              />
            </div>
          </div>
          <div className="form-group row d-flex justify-content-center">
            <label className="col-sm-2 col-form-label">Address</label>
            <div className="col-sm-6">
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                id="staticEmail"
                disabled={true}
                value={store.dataUser?.address}
                
              />
            </div>
          </div>
          <div className="form-group row d-flex justify-content-center">
            <label className="col-sm-2 col-form-label">Phone</label>
            <div className="col-sm-6">
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                id="staticEmail"
                disabled={true}
                value={store.dataUser?.phone}
              />
            </div>
          </div>
          <div className="form-group row d-flex justify-content-center">
            <label className="col-sm-2 col-form-label">Document</label>
            <div className="col-sm-6">
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                id="staticEmail"
                disabled={true}
                value={store.dataUser?.document}
              />
            </div>
          </div>
          <div className="form-group row d-flex justify-content-center ">
            <label className="col-sm-2 col-form-label">Paypal Link</label>
            <div className="col-sm-6">
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                id="staticEmail"
                disabled={true}
                value={store.dataUser?.paypal_link}
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
