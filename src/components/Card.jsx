import React from "react"
import PropTypes from "prop-types";

function Card(props) {
  const {website, photo, price, description} = props.item
  return (
    <a target="_blank" rel="noreferrer" href={website}>
      <img src={photo}/>
      <h1>R${price}</h1>
      <div>{description}</div>
      <div className="fake-anchor">Ver a oferta</div>
    </a>
  )
}

export default Card

Card.propTypes = {
  item: PropTypes.shape({
    photo: PropTypes.string,
    price: PropTypes.string,
    description: PropTypes.string,
    website: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
}