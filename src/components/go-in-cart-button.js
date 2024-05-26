import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './go-in-cart-button.css'

const GoInCartButton = (props) => {
  return (
    <div className="go-in-cart-button-container">
      <Link
        to="/product"
        id="goincart"
        className="go-in-cart-button-navlink button"
      >
        <span className="go-in-cart-button-text">В корзине</span>
      </Link>
    </div>
  )
}

GoInCartButton.defaultProps = {
  rootClassName1: '',
}

GoInCartButton.propTypes = {
  rootClassName1: PropTypes.string,
}

export default GoInCartButton
