import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import RedButton from './red-button'
import './total-price-in-cart.css'

const TotalPriceInCart = (props) => {
  return (
    <div className={`total-price-in-cart-container ${props.rootClassName} `}>
      <span className="total-price-in-cart-text">Общая сумма</span>
      <span className="total-price-in-cart-text1">{props.totalPrice}</span>
      <Link to="/checkout" className="total-price-in-cart-navlink">
        <RedButton
          text="Оформить заказ"
          rootClassName="red-button-root-class-name"
          className="total-price-in-cart-component"
        ></RedButton>
      </Link>
    </div>
  )
}

TotalPriceInCart.defaultProps = {
  totalPrice: 'Text',
  rootClassName: '',
}

TotalPriceInCart.propTypes = {
  totalPrice: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default TotalPriceInCart
