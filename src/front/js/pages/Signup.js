import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { Context } from "../store/appContext";

export const Signup = () => {
  const { store, actions } = useContext(Context);

  let history = useHistory();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [document, setDocument] = useState("");
  const [country, setCountry] = useState("");
  const [role, setRole] = useState(1);
  const [paypalLink, setPaypalLink] = useState("");

  const [error, setError] = useState(null);

  const procesarDatos = (e) => {
    e.preventDefault();
    if (
      !email.trim() ||
      !pass.trim() ||
      !firstName.trim() ||
      !lastName.trim() ||
      !address.trim() ||
      !phone.trim() ||
      !document.trim() ||
      !country.trim() ||
      !role ||
      !paypalLink.trim()
    ) {
      setError("Completar todos los datos!");
      return;
    }

    let minNumberofChars = 6;
    let maxNumberofChars = 16;
    let regularExpression =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (pass.length < minNumberofChars || pass.length > maxNumberofChars) {
      return false;
    }
    if (!regularExpression.test(pass)) {
      Swal.fire(
        "La contraseña debe de contener al menos un número y un caracter especial",
        "Revisa tus datos",
        "error"
      );
      return false;
    }
    setError(null);

    actions
      .signup(
        email,
        pass,
        firstName,
        lastName,
        address,
        phone,
        document,
        country,
        role,
        paypalLink
      )
      .then(() => {
        if (store.signupOK) {
          Swal.fire("Error en Registro", `${store.signupOK}`, "error");
        } else {
          Swal.fire("Usuario Registrado", "¡Gracias!", "success");
          history.push("/");
        }
      });
  };

  return (
    <div className="mt-5">
      <h3 className="text-center text-info">Registro</h3>
      <hr />
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <form onSubmit={procesarDatos}>
            <label className="mb-2">Email</label>
            <input
              type="email"
              className="form-control mb-2"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label className="mb-2">Contraseña</label>
            <input
              type="password"
              className="form-control mb-2"
              onChange={(e) => setPass(e.target.value)}
              value={pass}
            />
            <label className="mb-2">Nombre</label>
            <input
              type="text"
              className="form-control mb-2"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
            <label className="mb-2">Apellido</label>
            <input
              type="text"
              className="form-control mb-2"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
            <label className="mb-2">Dirección</label>
            <input
              type="text"
              className="form-control mb-2"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
            <label className="mb-2">País</label>
            <input
              type="text"
              className="form-control mb-2"
              onChange={(e) => setCountry(e.target.value)}
              value={country}
            />
            <label className="mb-2">Teléfono</label>
            <input
              type="text"
              className="form-control mb-2"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <label className="mb-2">N° Documento</label>
            <input
              type="number"
              className="form-control mb-2"
              onChange={(e) => setDocument(e.target.value)}
              value={document}
            />
            <label className="mb-2">Paypal link</label>
            <input
              type="text"
              className="form-control mb-2"
              onChange={(e) => setPaypalLink(e.target.value)}
              value={paypalLink}
            />
            <div className="form-check mt-3">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value={1}
                defaultChecked
                onChange={(e) => setRole(e.target.value)}
              />
              <label className="form-check-label" forhtml="exampleRadios1">
                Beneficiario
              </label>
            </div>
            <div className="form-check mt-3 mb-3">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value={2}
                onChange={(e) => setRole(e.target.value)}
              />
              <label className="form-check-label" forhtml="exampleRadios1">
                Donador
              </label>
            </div>
            {error ? <div className="alert alert-danger">{error}</div> : null}
            <button
              className="btn btn-lg btn-info btn-block w-100 text-light"
              type="submit"
            >
              Crear Usuario
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
