import React from 'react'

export function ListDonations(props) {
  return (
      
    <a href="#" className="list-group-item list-group-item-action " aria-current="true">
    <div className="d-flex w-100 justify-content-between">
      <h6 className="mb-1">{props.projectsTitle}</h6>
      <small >{props.date} days ago</small>
    </div>
    <p className="mb-1">{props.descriptions}</p>
    <small>The amount donated was $ {props.amountAcount}</small>
  </a>
  )
}

export default ListDonations