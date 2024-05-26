import React from 'react'

import { Helmet } from 'react-helmet'

import UpperPanel from '../components/upper-panel'
import ProductPage from '../components/product-page'
import BottomPanel from '../components/bottom-panel'
import './product.css'

import Cookies from "universal-cookie";

const products = require("../products");

const getCart = () => {
  let cookies = new Cookies();
  let cart = cookies.get("cart", { path: "/" });
  if (cart == undefined) return [];

  return cart;
};

const addToCart = (i) => {
  let cookies = new Cookies();
  let cart = getCart();
  let temp = {index: i, amount: 1};
  cart.push(temp);
  cookies.set("cart", cart, { path: "/" });
};

const Product = (props) => {
  let params = new URLSearchParams(props.location.search);
  let name = decodeURI(params.get("name"));
  let cart = getCart();
  let inCart = false;
  let index = -1;
  for (let i = 0; i < products.length; i++) {
    if (products[i].name == name) {
      index = i;
      for (let j = 0; j < cart.length; j++) {
        if (cart[j].index == index) {
          inCart = true;
          break;
        }
      }
    }
  }

  return (
    <div className="product-container">
      <Helmet>
        <title>Product - IPS</title>
        <meta property="og:title" content="Product - IPS" />
      </Helmet>
      <UpperPanel rootClassName="upper-panel-root-class-name2"></UpperPanel>
      <ProductPage
        name={products[index].name}
        type={products[index].type}
        price={products[index].price.concat(" р.")}
        guarantee={products[index].guarantee}
        description={products[index].description}
        manufacturer={products[index].manufacturer}
        rootClassName="product-page-root-class-name"
        imageSrcProduct={products[index].image}
        func={() => addToCart(index)}
        index={index}
        inCart={inCart}
      ></ProductPage>
      <BottomPanel rootClassName="bottom-panel-root-class-name3"></BottomPanel>
    </div>
  )
}

export default Product
