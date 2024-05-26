import React from 'react'

import { Helmet } from 'react-helmet'

import UpperPanel from '../components/upper-panel'
import CharacteristicCategory from '../components/characteristic-category'
import Characteristic from '../components/characteristic'
import SearchInfo from '../components/search-info'
import ProductCard from '../components/product-card'
import BottomPanel from '../components/bottom-panel'
import './katalog.css'

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

const Katalog = (props) => {
  let cart = getCart();


  let params = new URLSearchParams(props.location.search);
  let currentType = decodeURI(params.get("type"));
  let currentSearch = decodeURI(params.get("search"));
  let info = [];
  let searchBaseOn = "";
  let inCart = false;
  if (currentSearch == "null") {
    searchBaseOn = currentType;
    for (let i = 0; i < products.length; i++) {
      if (products[i].type == currentType) {
        inCart = false;
        for (let j = "0"; j < cart.length; j++) {
          if (products[i].name == products[cart[j].index].name) {
            inCart = true;
            break;
          }
        }
        let temp = {
          inCart: inCart,
          index: i,
          prod: products[i],
          navigate: "/product/?name=".concat(products[i].name)
          // className="kategory-component1"
        }
        info.push(temp);
      }
    }
  } else {
    searchBaseOn = currentSearch;
    for (let i = 0; i < products.length; i++) {
      if (products[i].name.search(currentSearch) != -1) {
        inCart = false;
        for (let j = 0; j < cart.length; j++) {
          if (products[i].name == products[cart[j].index].name) {
            inCart = true;
            break;
          }
        }
        let temp = {
          inCart: inCart,
          index: i,
          prod: products[i],
          navigate: "/product/?name=".concat(products[i].name)
          // className="kategory-component1"
        }
        info.push(temp);
      }
    }
  }

  return (
    <div className="katalog-container">
      <Helmet>
        <title>Katalog - IPS</title>
        <meta property="og:title" content="Katalog - IPS" />
      </Helmet>
      <UpperPanel rootClassName="upper-panel-root-class-name1"></UpperPanel>
      <div className="katalog-container1">
        <div className="katalog-container2">
          <span className="katalog-text">Фильтры</span>
          <CharacteristicCategory text="Производитель">
            <Characteristic rootClassName="characteristic-root-class-name3"></Characteristic>
            <Characteristic rootClassName="characteristic-root-class-name2"></Characteristic>
            <Characteristic rootClassName="characteristic-root-class-name"></Characteristic>
            <Characteristic rootClassName="characteristic-root-class-name1"></Characteristic>
            <Characteristic rootClassName="characteristic-root-class-name11"></Characteristic>
            <Characteristic rootClassName="characteristic-root-class-name10"></Characteristic>
            <Characteristic rootClassName="characteristic-root-class-name4"></Characteristic>
          </CharacteristicCategory>
          <div className="katalog-container3"></div>
          <span className="katalog-text1">Цена</span>
          <div className="katalog-container4">
            <input
              type="number"
              name="mn_price"
              className="katalog-textinput input"
            />
            <span className="katalog-text2">-</span>
            <input
              type="number"
              name="mx_price"
              className="katalog-textinput1 input"
            />
            <span className="katalog-text3">₽</span>
          </div>
          <Characteristic text="Действие акции"></Characteristic>
          <CharacteristicCategory></CharacteristicCategory>
        </div>
        <div className="katalog-container5">
          <SearchInfo amount={info.length} searchInfo={searchBaseOn}></SearchInfo>
          <div className="katalog-container6">

            {(() => {
              if (info.length == 0) {
                return (
                <span className="katalog-text-not-found">
                  По данному запросу ничего не нашлось
                </span>
                );
              } else { 
                return info.map((card) => (
                  <ProductCard
                    inCart={card.inCart}
                    prod={card.prod}
                    navigate={card.navigate}
                    func={() => addToCart(card.index)}
                  ></ProductCard>
                ));
              }
            })()}

          </div>
        </div>
      </div>
      <BottomPanel rootClassName="bottom-panel-root-class-name2"></BottomPanel>
    </div>
  )
}

export default Katalog
