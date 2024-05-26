import React, { useState } from 'react'

import PropTypes from 'prop-types'

import RedButton from './red-button'
import './payment-method.css'

const PaymentMethod = (props) => {
  const [isSelectorPayment, setIsSelectorPayment] = useState(false)

  let method = "Онлайн"
  const handleChange = (event) => {
    method = event.target.value;
    if (method != "Онлайн") setIsSelectorPayment(true);
    else setIsSelectorPayment(false);
  }

  return (
    <div className="payment-method-container">
      <div className="payment-method-container1"></div>
      <span className="payment-method-text">Способ оплаты:</span>
      <div className="payment-method-container2">
        <form className="payment-method-form">
          <span className="payment-method-text1">Онлайн</span>
          <input
            type="radio"
            name="paymentMethod"
            value="Онлайн"
            defaultChecked={true}
            onChange={handleChange.bind(this)}
            className="payment-method-radiobutton"
            style={{ cursor: "pointer" }}
          />
          <span className="payment-method-text2">Наличными</span>
          <input
            type="radio"
            name="paymentMethod"
            value="Наличными"
            onChange={handleChange.bind(this)}
            style={{ cursor: "pointer" }}
          />
        </form>
      </div>
      <div className="payment-method-container3">
        <span className="payment-method-text3">Итоговая сумма: </span>
        <span className="payment-method-text4">{props.price}</span>
        <span className="payment-method-text5"> р.</span>
      </div>
      {isSelectorPayment === false && (
        <div className="payment-method-container4">
          <div className="payment-method-container5">
            <RedButton
              text="Оформить"
              rootClassName="red-button-root-class-name1"
            ></RedButton>
          </div>
        </div>
      )}
      {isSelectorPayment === true && (
        <div className="payment-method-container6">
          <RedButton
            text="Оформить"
            rootClassName="red-button-root-class-name2"
          ></RedButton>
        </div>
      )}
    </div>
  )
}

PaymentMethod.defaultProps = {
  price: 'price',
}

PaymentMethod.propTypes = {
  price: PropTypes.string,
}

export default PaymentMethod
