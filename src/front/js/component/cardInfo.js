import React from 'react'
import CardContainer from './cardContainer'

const CardInfo = () => {
    const comments = [{ Header: "Nombre", Info: "Nombre del proyecto", Description: "Cuanto dinero necesita/resumen", extraDescription:"Descripcion larga del proyecto" }, 
    { Header: "Nombre", Info: "Nombre del proyecto", Description: "Cuanto dinero necesita/resumen", extraDescription:"Descripcion larga del proyecto"   },
     { Header: "Nombre", Info: "Nombre del proyecto", Description: "Cuanto dinero necesita/resumen", extraDescription:"Descripcion larga del proyecto"  }, 
     { Header: "Nombre", Info: "Nombre del proyecto", Description: "Cuanto dinero necesita/resumen", extraDescription:"Descripcion larga del proyecto"  }]
    return (
        <div className='container'>
            <div className="row">{comments.map((comment, index) => {
                return (<div key={index} className='col'><CardContainer Header={comment.Header} Info={comment.Info} Description={comment.Description} extraDescription={comment.extraDescription} />  </div>) 
            })}</div></div>
  )
}

export default CardInfo