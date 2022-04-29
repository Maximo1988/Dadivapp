import React, {useState} from 'react'
import CardInfo from '../component/cardInfo'


export const Donadores = () => {
  const [cantidad, setCantidad] = useState(false);
  return (
    <div>
      <div className="text-center text-info pt-5 pb-5"><h2><b>Proyectos Disponibles.</b></h2></div>
      <div>
        <CardInfo />
      </div>
      <div className="pt-5 d-flex justify-content-center imgenelCentro">
        <img src="https://i.picsum.photos/id/640/1000/400.jpg?hmac=oRlaWTOzMJC6KNvzqq_W8otJgfF0Uubb22Yr6YTi6mw"></img>
      </div>
      <div className='d-flex justify-content-center pt-5 pb-5 m-5 '>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">Total</h5>
          {cantidad === true ? (
          <h5 className="card-title text-center">...</h5>
          ) : (
            ""
          )}
          {cantidad === false ? (
          <button onClick={() => setCantidad(true)}
          className="btn btn-info text-white  ml-3">Total Donado</button>
          ) : (
            ""
          )}
          {cantidad === true ? (
            <button
              onClick={() => setCantidad(false)}
              className="btn btn-info text-white  ml-3"
            >
              Ocultar Total Donado
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      </div>
    </div>

  )
}
