import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import ConjuntoCards from "../component/conjuntoCards";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <div className="text-center text-white pt-5 pb-5 cabeceraBackgroundImg">
        <h1>
          <b>Dadivapp</b>
        </h1>
        <a>
          <b>Otra opción de ayudar y ser ayudado.</b>
        </a>
      </div>
      <br></br>
      <div className="text-center">
        <h3 className="text-info">¿Que se busca?</h3>
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <p>
              El fin de esta página es hacer crecer el emprendimiento personal
              que puede ayudar a la comunidad o puede ser el surgimiento de
              nuevas marcas que con la ayuda de otros que quieran demostrar su
              apoyo y el avance de la sociedad puedan ser realizados
              satisfactoriamente.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-info">¿Como funciona?</h3>
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <p>
              Es bastante fácil simplemente tienes que ser una persona que tenga
              un gran emprendimiento y lo quiere ampliar o ser alguien que
              quiera demostrar su apoyo y con cualquier cantidad de ayuda
              económica.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <h3 className="text-info">¿Que dicen de nosotros?</h3>
      </div>
      <ConjuntoCards />
    </div>
  );
};
