import React from 'react'
import CardContainer from './cardContainer'

const CardInfo = () => {
    const comments = [{ Header: "Luis Miguel", Info: "Nombre del emprendimiento", Description: "..." }, 
    { Header: "Maria Carmen", Info: "Nombre del emprendimiento", Description: "..."  },
     { Header: "Antonia Rodriguez", Info: "Nombre del emprendimiento", Description: "..." }, 
     { Header: "Francisco Lopez", Info: "Nombre del emprendimiento", Description: "..." }]
    return (
        <div className='container'>
            <div className="row">{comments.map((comment, index) => {
                return (<div className='col'><CardContainer key={index} Header={comment.Header} Info={comment.Info} Description={comment.Description} /> </div>)
            })}</div></div>
  )
}

export default CardInfo