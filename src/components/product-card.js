import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import InCartButton from './in-cart-button'
import './product-card.css'

const ProductCard = (props) => {
  return (
    <div className={`product-card-container ${props.rootClassName} `}>
      <Link to={props.navigate}>   
        <img
          id="img"
          alt={props.imageAlt}
          src={props.prod.image}
          className="product-card-image"
        />
      </Link>
      <span id="type" className="product-card-text">
        {props.prod.type}
      </span>
      <span id="name" className="product-card-text1">
        {props.prod.name}
      </span>
      <span id="cost" className="product-card-text2">
        {props.prod.price.concat(" р.")}
      </span>
      <InCartButton rootClassName="in-cart-button-root-class-name"
      inCart={props.inCart}
      func={props.func}
      ></InCartButton>
    </div>
  )
}

ProductCard.defaultProps = {
  imageAlt: 'image',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  rootClassName: '',
}

ProductCard.propTypes = {
  inCart: PropTypes.bool,
  func: PropTypes.func,
  prod: PropTypes.object,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ProductCard
