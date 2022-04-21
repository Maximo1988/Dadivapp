import React from "react";

export const Signup = () => {
  return (
    <div className="mt-5">
      <h3 className="text-center">Sign Up</h3>
      <hr />
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <form>
            <label className="mb-2">Email</label>
            <input
              type="email"
              className="form-control mb-2"
              placeholder="Prueba@prueba.com"
            />
            <label className="mb-2">Password</label>
            <input
              type="password"
              className="form-control mb-2"
              placeholder="******"
            />
            <label className="mb-2">Repeat Password</label>
            <input
              type="password"
              className="form-control mb-2"
              placeholder="******"
            />
            <label className="mb-2">First Name</label>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="First Name"
            />
            <label className="mb-2">Last Name</label>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Last Name"
            />
            <label className="mb-2">Address</label>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Address"
            />
            <label className="mb-2">Phone</label>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Phone"
            />
            <label className="mb-2">N° Document</label>
            <input
              type="number"
              className="form-control mb-2"
              placeholder="N° Document"
            />
            <label className="mb-2">Paypal link</label>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Paypal Link"
            />
            <div className="form-check mt-3">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label className="form-check-label" for="defaultCheck1">
                Beneficiario
              </label>
            </div>
            <div className="form-check mt-3 mb-3">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck2"
              />
              <label class="form-check-label" for="defaultCheck2">
                Donador
              </label>
            </div>
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
