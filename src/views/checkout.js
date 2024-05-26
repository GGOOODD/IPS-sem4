import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import UpperPanel from '../components/upper-panel'
import BaseButton from '../components/base-button'
import MyInput from '../components/my-input'
import ReceiveMethod from '../components/receive-method'
import PaymentMethod from '../components/payment-method'
import BottomPanel from '../components/bottom-panel'
import './checkout.css'
import Cookies from "universal-cookie";

const products = require("../products");

const getCart = () => {
  let cookies = new Cookies();
  let cart = cookies.get("cart", { path: "/" });
  if (cart == undefined) return [];

  return cart;
};

const Checkout = (props) => {
  const cart = getCart();

  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].amount * parseInt(products[cart[i].index].price);
  }

  return (
    <div className="checkout-container">
      <Helmet>
        <title>Checkout - IPS</title>
        <meta property="og:title" content="Checkout - IPS" />
      </Helmet>
      <UpperPanel rootClassName="upper-panel-root-class-name4"></UpperPanel>
      <div className="checkout-container1">
        <div className="checkout-container2">
          <span className="checkout-text">Оформление заказа</span>
          <Link to="/cart" className="checkout-navlink">
            <BaseButton
              text="Вернуться в корзину"
              rootClassName="base-button-root-class-name2"
              className="checkout-component1"
            ></BaseButton>
          </Link>
        </div>
        <MyInput
          text="Номер телефона"
          rootClassName="my-input-root-class-name"
          textinputPlaceholder="Номер телефона"
        ></MyInput>
        <ReceiveMethod rootClassName="receive-method-root-class-name"></ReceiveMethod>
        <PaymentMethod price={total}></PaymentMethod>
      </div>
      <BottomPanel rootClassName="bottom-panel-root-class-name5"></BottomPanel>
    </div>
  )
}

export default Checkout
