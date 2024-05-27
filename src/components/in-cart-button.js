import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './in-cart-button.css'


const InCartButton = (props) => {

  return (
    <div className={`in-cart-button-container ${props.rootClassName} `}>
      {props.currentInCart[props.indexInList] === false && (
        <button onClick={() => {let curInCart = structuredClone(props.currentInCart);
          curInCart[props.indexInList] = true;
          props.setCurrentInCart(curInCart);
           props.func();}}
        type="button"
        className="in-cart-button-button button" style={{ cursor: "pointer" }}>
          <span className="in-cart-button-text">В корзину</span>
        </button>
      )}
      {props.currentInCart[props.indexInList] === true && (
        <Link to={"/cart"} className="navlink">   
          <button
          type="button"
          className="in-cart-button-button2 button" style={{ cursor: "pointer" }}>
            <span className="in-cart-button-text">В корзине</span>
          </button>
        </Link>
      )}
    </div>
  )
}

InCartButton.defaultProps = {
  rootClassName: '',
}

InCartButton.propTypes = {
  inCart: PropTypes.bool,
  func: PropTypes.func,
  prod: PropTypes.object,
  rootClassName: PropTypes.string,
}

export default InCartButton
