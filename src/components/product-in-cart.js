import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './product-in-cart.css'


const ProductInCart = (props) => {



  return (
    <div id={props.name} className={"product-in-cart-container ".concat(props.rootClassName)}>
      <img
        alt={props.imageAltProduct}
        src={props.imageSrcProduct}
        className="product-in-cart-image"
        onClick={() => window.location.href = "/product/?name=".concat(props.name)}
        style={{cursor: "pointer"}}
      />
      <div className="product-in-cart-container1">
        <span className="product-in-cart-text">{props.type}</span>
        <span className="product-in-cart-text1">{props.name}</span>
      </div>
      <div className="product-in-cart-container2">
        <div className="product-in-cart-container3">
          <button id={props.name} onClick={() => props.changeAmount(props.index, props.amount - 1)} type="button" className="product-in-cart-button button" style={{ cursor: "pointer" }}>
            <img
              alt="image"
              src="/light8.svg"
              className="product-in-cart-image1"
            />
          </button>
          <span className="product-in-cart-text-amount">{props.amount}</span>
          <button id={props.name} onClick={() => props.changeAmount(props.index, props.amount + 1)} type="button" className="product-in-cart-button1 button" style={{ cursor: "pointer" }}>
            <img
              alt="image"
              src="/light7.svg"
              className="product-in-cart-image2"
            />
          </button>
        </div>
        <div className="product-in-cart-container4">
          <span className="product-in-cart-text2">{props.cost}</span>
          <span className="product-in-cart-text3"> руб./шт</span>
        </div>
      </div>
      <span id={"totalCost".concat(props.name)} className="product-in-cart-text4">{String(parseInt(props.cost) * props.amount).concat(" р.")}</span>
      <button id={props.name} onClick={() => props.changeAmount(props.index, 0)} type="button" className="product-in-cart-button2 button" style={{ cursor: "pointer" }}>
        <img alt="image" src="/light9.svg" className="product-in-cart-image3" />
      </button>
    </div>
  )
}

ProductInCart.defaultProps = {
  cost: 'Text',
  name: 'Text',
  imageSrcProduct: 'https://play.teleporthq.io/static/svg/default-img.svg',
  type: 'Text',
  totalCost: 'Text',
  imageAltProduct: 'image',
}

ProductInCart.propTypes = {
  cost: PropTypes.string,
  name: PropTypes.string,
  imageSrcProduct: PropTypes.string,
  type: PropTypes.string,
  totalCost: PropTypes.string,
  imageAltProduct: PropTypes.string,
}

export default ProductInCart
