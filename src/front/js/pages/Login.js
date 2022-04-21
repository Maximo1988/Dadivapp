import React from "react";

export const Login = () => {
  return (
    <div className="mt-5">
      <h3 className="text-center">Login</h3>
      <hr />
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <form>
            <label className="mb-2">Ingresar Email</label>
            <input
              type="email"
              className="form-control mb-2"
              placeholder="Prueba@prueba.com"
            />
            <label className="mb-2">Ingresar Password</label>
            <input
              type="password"
              className="form-control mb-2"
              placeholder="******"
            />
            <button
              className="btn btn-lg btn-dark btn-block w-100"
              type="submit"
            >
              LogIn
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
