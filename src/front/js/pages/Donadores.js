import React, { useState, useEffect, useContext } from "react";
import CardContainer from "../component/cardContainer";
import ListDonations from "../component/listDonations";
import { Context } from "../store/appContext";

export const Donadores = () => {
  const { store, actions } = useContext(Context);
  const [cantidad, setCantidad] = useState(false);
  const [donationsList, setDonationsList] = useState(false);
  const [totalDonado, setTotalDonado] = useState();

  useEffect(() => {
    actions.getDonations();
  }, []);

  useEffect(() => {
    actions.Projects_all();
  }, []);

  useEffect(() => {
    let donativos = 0;
    store.dataDonaciones.forEach((element) => {
      donativos += element.amount_donated;
    });
    setTotalDonado(donativos);
  }, [totalDonado]);

  return (
    <div>
      <div className="text-center text-info pt-5 pb-5">
        <h2>
          <b>Proyectos Disponibles</b>
        </h2>
        <div className="container row myScroll">
          {store.projects_all.length === 0 ? (
            <h5>No hay proyectos disponibles</h5>
          ) : (
            store.projects_all.map((project, index) => {
              return (
                <div
                  className="col-12 col-sm-12 col-md-6 col-lg-4 my-3"
                  key={index}
                >
                  <CardContainer
                    key={index}
                    Name={project.name}
                    Donative_amount={project.donative_amount}
                    Description={project.description}
                    Date_start={project.date_start}
                    Date_finish={project.date_finish}
                  />
                </div>
              );
            })
          )}
        </div>
      </div>

      <div className="d-flex justify-content-center pt-5 pb-5 m-5 ">
        <div className="card w-100">
          <div className="card-body d-flex justify-content-around row ">
            <div className="col-4 d-flex flex-column justify-content-center">
              <h5 className="card-title text-center">Total</h5>
              {cantidad === true ? (
                <h5 className="card-title text-center">$ {totalDonado}</h5>
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
                <div className="list-group mb-3">
                  {store.dataDonaciones.length === 0 ? (
                    <h5>Todavia no haz hecho una donacion</h5>
                  ) : (
                    store.dataDonaciones.map((Donation, index) => {
                      // let sum = 0;
                      // const Total = [...Donation.amount_donated];
                      // Total.forEach((item) => {
                      //   sum += item;
                      // });
                      return (
                        <ListDonations
                          key={index}
                          projectsTitle={Donation.id_projects}
                          date={Donation.date_start}
                          description={""}
                          amountAcount={Donation.amount_donated}
                        />
                      );
                    })
                  )}
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
