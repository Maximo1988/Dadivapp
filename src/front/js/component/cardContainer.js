import React, { useState, useContext } from "react";
import propTypes from "prop-types";
import { Context } from "../store/appContext";

export function CardContainer(props) {
  const { store, actions } = useContext(Context);

  const [statusCard, setStatusCard] = useState(false);
  const [toggle, setToggle] = useState(false);

  let toggleOpen = () => setToggle(!toggle);
  const menuClass = `dropdown-menu${toggle ? " show" : ""}`;

  return (
    <div>
      <div className="card estilo border-info pb-3 ml-5 w-100">
        <div className="card-header">{props.Name}</div>
        <div className="card-body text-body">
          <img
            src="https://i.picsum.photos/id/678/300/200.jpg?hmac=sDet5Lg89tvfQCyBDCf4w7h1z0kXFaNilsP99PZW8tc"
            className="card-img-top"
            alt="..."
          ></img>
          <p className="card-text">Monto necesario $ {props.Donative_amount}</p>
          {statusCard === true ? (
            <p className="card-text">{props.Description}</p>
          ) : (
            ""
          )}
          {statusCard === false ? (
            <button
              onClick={() => setStatusCard(true)}
              className="btn btn-info text-white d-flex justify-content-around"
            >
              Leer más
            </button>
          ) : (
            ""
          )}
          {statusCard === true ? (
            <button
              onClick={() => setStatusCard(false)}
              className="btn btn-info text-white d-flex justify-content-around"
            >
              Leer menos
            </button>
          ) : (
            ""
          )}

          {props.notButtonDonate ? (
            ""
          ) : (
            <a
              href="https://www.paypal.com/ar/webapps/mpp/paypal-me"
              className="btn btn-lg btn-dark btn-block"
            >
              Donar
            </a>
          )}
        </div>
        <footer className="blockquote-footer mt-2">
          <cite title="Source Title">
            Fecha Inicio: <b> {props.Date_start}</b>{" "}
          </cite>
        </footer>
        <footer className="blockquote-footer">
          <cite title="Source Title">
            Fecha Fin: <b>{props.Date_finish}</b>
          </cite>
        </footer>
      </div>
    </div>
  );
}

export default CardContainer;

CardContainer.propTypes = {
  name: propTypes.string,
  date_finish: propTypes.instanceOf(Date),
  donative_amount: propTypes.string,
  description: propTypes.string,
};
