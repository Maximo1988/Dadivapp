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
        <h3 className="card-header text-primary">{props.Name}</h3>
        <div className="card-body text-body">
          <img
            src="https://i.picsum.photos/id/678/300/200.jpg?hmac=sDet5Lg89tvfQCyBDCf4w7h1z0kXFaNilsP99PZW8tc"
            className="card-img-top"
            alt="..."
          ></img>
          <h5 className="shadow p-2 mt-2 mb-2 bg-white rounded">
            Monto necesario <b>$ {props.Donative_amount}</b>
          </h5>
          {statusCard === true ? (
            <p className="card-text">{props.Description}</p>
          ) : (
            ""
          )}
          {statusCard === false ? (
            <button
              onClick={() => setStatusCard(true)}
              className="btn btn-info text-white d-flex justify-content-around col-12 col-sm-12 mb-2"
            >
              Leer más
            </button>
          ) : (
            ""
          )}
          {statusCard === true ? (
            <button
              onClick={() => setStatusCard(false)}
              className="btn btn-secondary text-white d-flex justify-content-around col-12 col-sm-12 mb-2"
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
              className="btn btn-dark btn-block w-100"
            >
              Donar
            </a>
          )}
        </div>
        <div className="d-flex justify-content-between">
          <footer className="mt-2 border mx-2">
            Fecha Inicio: <b> {props.Date_start}</b>{" "}
          </footer>
          <footer className="mt-2 border mx-2">
            Fecha Fin: <b>{props.Date_finish}</b>
          </footer>
        </div>
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
