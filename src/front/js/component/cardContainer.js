import React from 'react'
import PropType from 'prop-types'

const CardContainer = (props) => {
  return (
      <div className='row flex-nowrap, d-flex flex-row flex-nowrap overflow-auto w-auto'>
    <div className="card estilo border-info pb-3 ml-5 w-100 ">
            <div className="card-header">{props.Header}</div>
            <div className="card-body text-body">
                <h5 className="card-subtitle mb-2 text-muted">{props.Info}</h5>
                <p className="card-text">{props.Description}</p>
                <a href="#" className="card-link text-info">Learn More</a>
                <a href="#" className="card-link text-info">Donate</a>
            </div>
        </div>
        </div>
  )
}

export default CardContainer