import React from 'react'
import CardOpinion from './cardOpinion'

const ConjuntoCards = () => {
    const comments = [{ Header: "Luis Miguel", Info: "Donador", Description: "Es una muy buena página, me parece bastante interesante las ideas de emprendimiento de otras perosnas y el poder ayudarlos." }, 
    { Header: "Maria Carmen", Info: "Beneficiario", Description: "!Me encanta esta página¡ gracias a todas las personas que me han donado logre sacar adelante mi negocio de ropa." },
     { Header: "Antonia Rodriguez", Info: "Donador", Description: "Como una persona que le gusta ayudar a las personas que quieres trabajar me parece una excelente página, y me sorprende la cantidad de personas que tienen ideas maravillosas que puedoa apoyar." }, 
     { Header: "Francisco Lopez", Info: "Beneficiario", Description: "Todo lo que pienso de esta página es positivo, en simplemete una gran ayuda para aquellos que quieren tener otra fuente de ingresos desde el emprendimiento." }]
         
     return (
        <div className='container'>
            <div className="row">{comments.map((comment, index) => {
                return (<div key={index} className='col'><CardOpinion  Header={comment.Header} Info={comment.Info} Description={comment.Description} /> </div>)
            })}</div></div>
            
    )
}

export default ConjuntoCards