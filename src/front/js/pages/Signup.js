import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import { Context } from "../store/appContext";

export const Signup = () => {
  const { store, actions } = useContext(Context);
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
      !role.trim() ||
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
        "password should contain atleast one number and one special character",
        "Click the button",
        "error"
      );
      return false;
    }
    setError(null);

    try {
      actions.signup(
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
      );
    } catch (error) {
      console.log(error);
    }
    return <Redirect to="/login" />;
  };

  return (
    <div className="mt-5">
      <h3 className="text-center">Sign Up</h3>
      <hr />
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <form onSubmit={procesarDatos}>
            <label className="mb-2">Email</label>
            <input
              type="email"
              className="form-control mb-2"
              placeholder="Prueba@prueba.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label className="mb-2">Password</label>
            <input
              type="password"
              className="form-control mb-2"
              placeholder="******"
              onChange={(e) => setPass(e.target.value)}
              value={pass}
            />
            <label className="mb-2">First Name</label>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
            <label className="mb-2">Last Name</label>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
            <label className="mb-2">Address</label>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
            <label className="mb-2">Country</label>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Country"
              onChange={(e) => setCountry(e.target.value)}
              value={country}
            />
            <label className="mb-2">Phone</label>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <label className="mb-2">N° Document</label>
            <input
              type="number"
              className="form-control mb-2"
              placeholder="N° Document"
              onChange={(e) => setDocument(e.target.value)}
              value={document}
            />
            <label className="mb-2">Paypal link</label>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Paypal Link"
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
              className="btn btn-lg btn-dark btn-block w-100"
              type="submit"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
