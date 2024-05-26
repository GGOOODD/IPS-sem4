import React from 'react'

import PropTypes from 'prop-types'

import './product-in-history.css'

const ProductInHistory = (props) => {
  return (
    <div className={`product-in-history-container ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="product-in-history-image"
      />
      <div className="product-in-history-container1">
        <span className="product-in-history-text">{props.type}</span>
        <span className="product-in-history-text1">{props.name}</span>
        <span className="product-in-history-text2">{props.price}</span>
      </div>
      <div className="product-in-history-container2">
        <span className="product-in-history-text3">{props.amount}</span>
      </div>
    </div>
  )
}

ProductInHistory.defaultProps = {
  amount: 'Text',
  type: 'Text',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  rootClassName: '',
  imageAlt: 'image',
  price: 'Text',
  name: 'Text',
}

ProductInHistory.propTypes = {
  amount: PropTypes.string,
  type: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
  price: PropTypes.string,
  name: PropTypes.string,
}

export default ProductInHistory
