import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Profile_Form = (props) => {
  const { store, actions } = useContext(Context);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [telefonoinput, setTelefonoInput] = useState(store.dataUser.phone);
  const [emailinput, setEmailInput] = useState(store.dataUser.email);
  const [firstnameinput, setFirstnameInput] = useState(
    store.dataUser.first_name
  );
  const [lastnameinput, setLastnameInput] = useState(store.dataUser.last_name);
  const [addressinput, setAddressInput] = useState(store.dataUser.address);
  const [documentoinput, setDocumentoInput] = useState(store.dataUser.document);
  const [countryinput, setCountryInput] = useState(store.dataUser.country);

  const editar = () => {
    setModoEdicion(true);
  };

  const guardar = () => {
    setModoEdicion(false);
    console.log("se presionó el boton guardar");
    let updateuser = actions.profilechange(
      emailinput,
      firstnameinput,
      lastnameinput,
      addressinput,
      telefonoinput,
      documentoinput,
      countryinput,
      store.dataUser?.paypal_link
    );
    store.dataUser.phone = updateuser.phone;
    store.dataUser.address = updateuser.address;
    store.dataUser.first_name = updateuser.first_name;
    store.dataUser.last_name = updateuser.last_name;
    store.dataUser.document = updateuser.document;
    store.dataUser.country = updateuser.country;
  };
  console.log(store.dataUser);

  return (
    <div className="text-center mt-4">
      <form>
        <div className="form-group row d-flex justify-content-center mt-2">
          <div className="col-sm-2">Email</div>
          <div className="col-sm-3">
            <input
              type="email"
              className="form-control"
              id="colFormLabel"
              placeholder={store.dataUser?.email}
              disabled={true}
              onChange={(e) => {
                setEmailInput(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="form-group row d-flex justify-content-center mt-2">
          <div className="col-sm-2">Nombre</div>
          <div className="col-sm-3">
            <input
              type="nombre"
              className="form-control"
              id="colFormLabel"
              placeholder={store.dataUser?.first_name}
              disabled={modoEdicion ? false : true}
              onChange={(e) => {
                setFirstnameInput(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="form-group row d-flex justify-content-center mt-2">
          <div className="col-sm-2">Apellido</div>
          <div className="col-sm-3">
            <input
              type="apellido"
              className="form-control"
              id="colFormLabel"
              placeholder={store.dataUser?.last_name}
              disabled={modoEdicion ? false : true}
              onChange={(e) => {
                setLastnameInput(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="form-group row d-flex justify-content-center mt-2">
          <div className="col-sm-2">Dirección</div>
          <div className="col-sm-3">
            <input
              type="direccion"
              className="form-control"
              id="colFormLabel"
              placeholder={store.dataUser?.address}
              disabled={modoEdicion ? false : true}
              onChange={(e) => {
                setAddressInput(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="form-group row d-flex justify-content-center mt-2">
          <div className="col-sm-2">Teléfono</div>
          <div className="col-sm-3">
            <input
              type="telefono"
              className="form-control"
              id="colFormLabel"
              placeholder={store.dataUser?.phone}
              disabled={modoEdicion ? false : true}
              onChange={(e) => {
                setTelefonoInput(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="form-group row d-flex justify-content-center mt-2">
          <div className="col-sm-2">No. Documento</div>
          <div className="col-sm-3">
            <input
              type="documento"
              className="form-control"
              id="colFormLabel"
              placeholder={store.dataUser?.document}
              disabled={modoEdicion ? false : true}
              onChange={(e) => {
                setDocumentoInput(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="form-group row d-flex justify-content-center mt-2">
          <div className="col-sm-2">País</div>
          <div className="col-sm-3">
            <input
              type="pais"
              className="form-control"
              id="colFormLabel"
              placeholder={store.dataUser?.country}
              disabled={modoEdicion ? false : true}
              onChange={(e) => {
                setCountryInput(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="form-group row d-flex justify-content-center mt-2">
          <div className="col-sm-2">Paypal Link</div>
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
