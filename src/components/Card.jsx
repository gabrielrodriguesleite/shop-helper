import React from 'react';
import PropTypes from 'prop-types';
import "./Card.css"

function Card(props) {
  const { website, photo, price, description } = props.item;
  return (
    <div className="Card">
      <a target="_blank" rel="noreferrer" href={website}>
        <div className='card-image-box'>
          <img src={photo} />
        </div>
        <div>
          <p className='card-price'>R${price}</p>
          <p>{description}</p>
          <p className="fake-anchor">Ver a oferta</p>
        </div>
      </a>
    </div>
  );
}

export default Card;

Card.propTypes = {
  item: PropTypes.shape({
    photo: PropTypes.string,
    price: PropTypes.string,
    description: PropTypes.string,
    website: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};
