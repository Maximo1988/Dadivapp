import React, { useState } from 'react'
import PropType from 'prop-types'

const CardContainer = (props) => {
    const [statusCard, setStatusCard] = useState(false)
    return (
        <div>
            <div className="card estilo border-info pb-3 ml-5 w-100">
                <div className="card-header">{props.Header}</div>
                <div className="card-body text-body">
                    <h5 className="card-subtitle mb-2 text-muted">{props.Info}</h5>
                    <p className="card-text">{props.Description}</p>
                    {statusCard === true ? <p className="card-text">{props.extraDescription}</p> : ""}
                    {statusCard === false ? <button onClick={() => setStatusCard(true)} className="btn btn-info text-white">Read More</button> : ""}
                    {statusCard === true ? <button onClick={() => setStatusCard(false)} className="btn btn-info text-white">Read Less</button> : ""}
                    <button className="btn btn-info text-white px-3" style={{ float: "right" }}>Donate</button>
                </div>
                <footer className="blockquote-footer"><cite title="Source Title">dd/mm/year</cite></footer>
                <footer className="blockquote-footer"><cite title="Source Title">dd/mm/year</cite></footer>
            </div>
        </div>
        

    )
}

export default CardContainer