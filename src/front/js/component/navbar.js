import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Navbar = () => {

  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getDataUser(store.token);
  }, [store.token]);
  let Signout = () => { actions.Sign_out() }
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container d-flex justify-content-between">
        <Link to="/">
          <span className="navbar-brand text-info mb-0 h5">
          <svg width= "35" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="#12DAF2" d="M328.7 52.28L431.7 119.8C449.5 132.9 453.3 157.9 440.2 175.7C427.1 193.5 402.1 197.3 384.3 184.2L296.6 127.1H191.1C183.2 127.1 175.1 135.2 175.1 143.1C175.1 152.7 183.2 159.1 191.1 159.1H254.2C270.2 159.1 284.1 170.9 287.6 186.6C290.8 206.6 275.5 223.1 255.1 223.1H143.1C116.1 223.1 90.87 214.7 69.87 197.7L23.37 159.1L15.1 160C7.25 160 0 152.7 0 143.1V47.99C0 39.25 7.25 32 15.1 32H266.1C289 32 310.9 39.19 328.7 52.28L328.7 52.28zM151.3 459.7L16.27 360.2C-1.509 347.1-5.305 322.1 7.803 304.3C20.93 286.5 45.94 282.7 63.74 295.8L183.4 384H304C312.8 384 320 376.8 320 368C320 359.3 312.8 352 304 352H225.8C209.8 352 195 341.1 192.4 325.4C189.2 305.4 204.5 288 224 288H352C379 288 405.1 297.3 426.1 314.3L472.6 352L496 352C504.7 352 512 359.3 512 368V464C512 472.8 504.7 480 496 480H213C190.1 480 169.1 472.8 151.3 459.7V459.7z"/></svg>
            <b className="p-2">Dadivapp</b>
          </span>
        </Link>
        {!store.token ? (
          <div className="d-flex">
            <Link className="btn text-light bg-info m-2" to="/login">
              <b>Acceder</b>
            </Link>
            <Link className="btn text-light bg-info m-2" to="/signup">
              <b>Registrarse</b>
            </Link>
          </div>
        ) : (
          <div className="d-flex">
            <Link className="btn text-light bg-info m-2" to="/Profile">
              <b>Perfil</b>
            </Link>
            {store.dataUser?.role === 1 ?
              <Link className="btn text-light bg-info m-2" to="/beneficiaries">
                <b>Proyectos</b>
              </Link> : null}
            {store.dataUser?.role === 2 ?
              <Link className="btn text-light bg-info m-2" to="/donadores">
                <b>Donar</b>
              </Link> : null}
            <Link onClick={() => {
              Swal.fire({
                title: '¿Estas seguro?',
                text: "¿Quieres salir de la página?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si',
              }).then((result) => {
                if (result.isConfirmed) {
                  Signout();
                  Swal.fire(
                    '¡Listo!',
                    'Vuelve a acceder para entrar',
                    'success'
                  )
                }
              })
            }} className="btn text-light bg-info m-2" to="/">
              <b>Salir</b>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
