import React from "react"
import PropTypes from "prop-types";

function Card(props) {
  const {item} = props
  console.log(item)
  return (
    <a target="_blank" rel="noreferrer" href={item.website}>
      <img src={item.photo}/>
      <h1>R${item.price}</h1>
      <div>{item.description}</div>
      <div className="fake-anchor">Ver a oferta</div>
    </a>
  )
}

export default Card

Card.propTypes = {
  item: PropTypes.object.isRequired,
}