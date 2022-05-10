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
              className="btn btn-info text-white"
            >
              Leer más
            </button>
          ) : (
            ""
          )}
          {statusCard === true ? (
            <button
              onClick={() => setStatusCard(false)}
              className="btn btn-info text-white"
            >
              Leer menos
            </button>
          ) : (
            ""
          )}

          {props.notButtonDonate ? (
            ""
          ) : (
            <div
              className="dropdown myDropdown px-3"
              style={{ float: "right" }}
              onClick={() => toggleOpen()}
            >
              <button
                className="btn btn-info text-white dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Donar
              </button>
              <div className={menuClass} aria-labelledby="dropdownMenuButton ">
                <ul className="text-info bg-white">
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      id="customRadio1"
                      name="customRadio"
                      className="custom-control-input"
                    ></input>
                    <label
                      className="custom-control-label"
                      htmlFor="customRadio1"
                    >
                      Donar $1000
                    </label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      id="customRadio1"
                      name="customRadio"
                      className="custom-control-input"
                    ></input>
                    <label
                      className="custom-control-label"
                      htmlFor="customRadio1"
                    >
                      Donar $1500
                    </label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      id="customRadio1"
                      name="customRadio"
                      className="custom-control-input"
                    ></input>
                    <label
                      className="custom-control-label"
                      htmlFor="customRadio1"
                    >
                      Donar $2000
                    </label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      id="customRadio1"
                      name="customRadio"
                      className="custom-control-input"
                    ></input>
                    <label
                      className="custom-control-label"
                      htmlFor="customRadio1"
                    >
                      Donar $2500
                    </label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      id="customRadio1"
                      name="customRadio"
                      className="custom-control-input"
                    ></input>
                    <label
                      className="custom-control-label"
                      htmlFor="customRadio1"
                    >
                      Donar $2500
                    </label>
                  </div>
                </ul>
              </div>
            </div>
          )}
        </div>
        <footer className="blockquote-footer">
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
