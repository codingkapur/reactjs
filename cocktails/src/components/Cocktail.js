import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({image, name,id,info, glass}) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt ={name}></img>
      </div>
      <div className="cocktail-footer">
        <h3 className="">{name}</h3>
        <h4 className="">{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">Details</Link>
      </div>
    </article>
  )
}

export default Cocktail
