
import React, { useState, useEffect,useContext} from "react";
import CardInfo from "../component/cardInfo";
import ListDonations from "../component/listDonations";
import {Context }from "../store/appContext"

export const Donadores = () => {
  
  const { store, actions } = useContext(Context);
  const [cantidad, setCantidad] = useState(false);
  const [donationsList, setDonationsList] = useState(false);
  useEffect(() => {
    actions.getDonations();
  }, []);
  return (

    <div>
      <div className="text-center text-info pt-5 pb-5">
        <h2>
          <b>Proyectos Disponibles</b>

        </h2>
      </div>
      <div>
        <CardInfo />
      </div>
      <div className="pt-5 d-flex justify-content-center imgenelCentro">
        <img src="https://i.picsum.photos/id/640/1000/400.jpg?hmac=oRlaWTOzMJC6KNvzqq_W8otJgfF0Uubb22Yr6YTi6mw"></img>
      </div>
      <div className="d-flex justify-content-center pt-5 pb-5 m-5 ">
        <div className="card w-100">
          <div className="card-body d-flex justify-content-around row ">
            <div className="col-4 d-flex flex-column justify-content-center">
              <h5 className="card-title text-center">Total</h5>
              {cantidad === true ? (
                <h5 className="card-title text-center">...</h5>
              ) : (
                ""
              )}
              {cantidad === false ? (
                <button
                  onClick={() => setCantidad(true)}
                  className="btn btn-info text-white  ml-3"
                >
                  Total Donado
                </button>
              ) : (
                <button
                  onClick={() => setCantidad(false)}
                  className="btn btn-info text-white  ml-3"
                >
                  Ocultar Total Donado
                </button>
              )}
            </div>
            <div className="col-4 d-flex flex-column justify-content-center ">
              <h5 className="card-title text-center">Donaciones</h5>
              {donationsList === true ? (
                <div class="list-group mb-3">{store.dataDonaciones.length===0 ?<h5>Todavia no haz hecho una donacion</h5> : store.dataDonaciones.map((Donation,index)=>{
                  return (<ListDonations key={index} projectsTiltle={Donation.id_projects} date={""} description={""}  amountAcount={donationsList.amount_donated}/>)
                })}
                </div>
              ) : (
                ""
              )}
              {donationsList === false ? (
                <button
                  onClick={() => setDonationsList(true)}
                  className="btn btn-info text-white  ml-3"
                >
                  Abrir Donaciones
                </button>
              ) : (
                <button
                  onClick={() => setDonationsList(false)}
                  className="btn btn-info text-white  ml-3"
                >
                  Ocultar Donaciones
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
