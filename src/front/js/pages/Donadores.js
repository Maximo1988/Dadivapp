import React from 'react'
import CardInfo from '../component/cardInfo'

const Donadores = () => {
  return (
      <div>
    <div className="text-center text-info pt-5 pb-5"><h2><b>Proyectos Disponibles.</b></h2></div>
    <div>
			<CardInfo/>
            
		</div>
		<div className="pt-5 d-flex justify-content-center imgenelCentro">
			<img src="https://i.picsum.photos/id/640/1000/400.jpg?hmac=oRlaWTOzMJC6KNvzqq_W8otJgfF0Uubb22Yr6YTi6mw"></img>
		</div>
    </div>
    
  )
}

export default Donadores