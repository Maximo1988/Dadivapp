import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import ConjuntoCards from "../component/conjuntoCards";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <div className="text-center text-white pt-5 cabeceraBackgroundImg">
        <h1>
          <b>Dadivapp</b>
        </h1>
        <a>
          <b>Otra opción de ayudar y ser ayudado.</b>
        </a>
      </div>
      <br></br>
      <div>
        <h3 className="text-info text-center">¿Que se busca?</h3>
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <p>
              <img className="represntativaIMG" src="https://cdn-icons-png.flaticon.com/512/4151/4151894.png"></img>
              El fin de esta página es hacer crecer el emprendimiento personal
              que puede ayudar a la comunidad o puede ser el surgimiento de
              nuevas marcas que con la ayuda de otros que quieran demostrar su
              apoyo y el avance de la sociedad puedan ser realizados
              satisfactoriamente.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-info text-center">¿Cómo funciona?</h3>
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <p>
            <img className="represntativaIMG2" src="https://cdn-icons-png.flaticon.com/512/4152/4152041.png"></img>
             Es bastante fácil simplemente tienes que ser una persona que tenga
              un gran emprendimiento y lo quiere ampliar o ser alguien que
              quiera demostrar su apoyo y con cualquier cantidad de ayuda
              económica.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <h3 className="text-info">¿Qué dicen de nosotros?</h3>
      </div>
      <ConjuntoCards />
    </div>
  );
};
