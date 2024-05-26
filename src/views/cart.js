import React, { useState } from 'react'

import { Helmet } from 'react-helmet'

import UpperPanel from '../components/upper-panel'
import ProductInCart from '../components/product-in-cart'
import TotalPriceInCart from '../components/total-price-in-cart'
import BottomPanel from '../components/bottom-panel'
import './cart.css'
import Cookies from "universal-cookie";

const products = require("../products");

const getCart = () => {
  let cookies = new Cookies();
  let cart = cookies.get("cart", { path: "/" });
  if (cart == undefined) return [];

  return cart;
};


const Cart = (props) => {
  const cartt = getCart();
  
  const [cartItems, setCartItems] = useState(cartt)

  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    total += cartItems[i].amount * parseInt(products[cartItems[i].index].price);
  }

  const [totalPrice, setTotalPrice] = useState(total)

  const changeAmount = (index, amount) => {
    let cookies = new Cookies();
    let cart = structuredClone(cartItems);
    let len = cart.length;
    for (let i = 0; i < len; i++) {
      if (cart[i].index == index) {
        cart[i].amount = amount;
        if (amount <= 0){
          cart.splice(i, 1);
        }
        break;
      }
    }
  
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].amount * parseInt(products[cart[i].index].price);
    }
  
    cookies.set("cart", cart, { path: "/" });
    setTotalPrice(total);
    setCartItems(cart);
  };

  return (
    <div className="cart-container">
      <Helmet>
        <title>Cart - IPS</title>
        <meta property="og:title" content="Cart - IPS" />
      </Helmet>
      <UpperPanel rootClassName="upper-panel-root-class-name3"></UpperPanel>
      <div className="cart-container1">
        <div className="cart-container2">
          <span className="cart-text">Корзина</span>
          <div className="cart-container3">

          {(() => {
              if (cartItems.length == 0) {
                return (
                <span className="cart-text-empty">
                  В корзине пусто
                </span>
                );
              } else { 
                return cartItems.map((card) => (
                  <ProductInCart
                  rootClassName={"product-in-cart-root-class-".concat(products[card.index].name)}
                  cost={products[card.index].price}
                  name={products[card.index].name}
                  type={products[card.index].type}
                  imageSrcProduct={products[card.index].image}
                  changeAmount={changeAmount}
                  index={card.index}
                  amount={card.amount}
                  ></ProductInCart>
                ));
              }
            })()}

          </div>
        </div>
        <TotalPriceInCart
          totalPrice={String(totalPrice).concat(" р.")}
          rootClassName="total-price-in-cart-root-class-name"
        ></TotalPriceInCart>
      </div>
      <BottomPanel rootClassName="bottom-panel-root-class-name4"></BottomPanel>
    </div>
  )
}

export default Cart
