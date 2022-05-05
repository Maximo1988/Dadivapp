import React, { useState } from "react";
import PropType from "prop-types";

export const CardContainer = (props) => {
  const [statusCard, setStatusCard] = useState(false);
  const [toggle, setToggle] = useState(false)

  let toggleOpen = () => setToggle(!toggle)
  const menuClass = `dropdown-menu${(toggle ? " show" : "")}`

  return (
    <div>
      <div className="card estilo border-info pb-3 ml-5 w-100">
        <div className="card-header">{props.Header}</div>
        <div className="card-body text-body">
          <h5 className="card-subtitle mb-2 text-muted">{props.Info}</h5>
          <p className="card-text">{props.Description}</p>
          {statusCard === true ? (
            <p className="card-text">{props.extraDescription}</p>
          ) : (
            ""
          )}
          {statusCard === false ? (
            <button
              onClick={() => setStatusCard(true)}
              className="btn btn-info text-white"
            >
              Read More
            </button>
          ) : (
            ""
          )}
          {statusCard === true ? (
            <button
              onClick={() => setStatusCard(false)}
              className="btn btn-info text-white"
            >
              Read Less
            </button>
          ) : (
            ""
          )}

         { props.notButtonDonate? "":<div className="dropdown myDropdown px-3" style={{ float: "right" }} onClick={() => toggleOpen()}>
            <button
              className="btn btn-info text-white dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              Donate
            </button>
            <div className={menuClass} aria-labelledby="dropdownMenuButton ">
              <ul className="text-info bg-white">
                <div className="custom-control custom-radio">
                  <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input"></input>
                  <label className="custom-control-label" htmlFor="customRadio1">Donate $1000</label>
                </div>
                <div className="custom-control custom-radio">
                  <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input"></input>
                  <label className="custom-control-label" htmlFor="customRadio1">Donate $1500</label>
                </div>
                <div className="custom-control custom-radio">
                  <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input"></input>
                  <label className="custom-control-label"   htmlFor="customRadio1">Donate $2000</label>
                </div>
                <div className="custom-control custom-radio">
                  <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input"></input>
                  <label className="custom-control-label" htmlFor="customRadio1">Donate $2500</label>
                </div>
                <div className="custom-control custom-radio">
                  <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input"></input>
                  <label className="custom-control-label" htmlFor="customRadio1">Donate $2500</label>
                </div>
              </ul>
            </div>
          </div>}
        </div>
        <footer className="blockquote-footer">
          <cite title="Source Title">dd/mm/year</cite>
        </footer>
        <footer className="blockquote-footer">
          <cite title="Source Title">dd/mm/year</cite>
        </footer>
      </div>
    </div >
  );
};

export default CardContainer;
