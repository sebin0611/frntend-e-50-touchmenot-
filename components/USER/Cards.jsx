import React from 'react'
import { useNavigate } from 'react-router-dom'

function Cards({value}) {

  const navigate = useNavigate()
  return (
    <div><div className="card card-side bg-base-100 shadow-sm">
      <figure>
        <img
          src={value.images}
          alt="Movie" />

      </figure>
      <div className="card-body">
        <h2 className="card-title">{value.name}</h2>
        <p>{value.description}</p>
        <p>$.{value.price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={ ()=>navigate(`Productdetails/${value._id}`)}>Touch Me</button>
        </div>
      </div>
    </div>
    </div>

  )
}

export default Cards