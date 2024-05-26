import React, { useState } from 'react'

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

  let listFilters = [];
  let info = [];
  let searchBaseOn = "";
  let inCart = false;
  const cartlen = cart.length;
  const prodlen = products.length;
  if (currentSearch == "null") {
    searchBaseOn = currentType;
    for (let i = 0; i < prodlen; i++) {
      if (products[i].type == currentType) {
        inCart = false;
        for (let j = 0; j < cartlen; j++) {
          if (products[i].name == products[cart[j].index].name) {
            inCart = true;
            break;
          }
        }

        let filtlen = products[i].filters.length;
        for (let j = 0; j < filtlen; j++) {
          let flag = true;
          let listfilterslen = listFilters.length;
          for (let k = 0; k < listfilterslen; k++) {
            if (listFilters[k].characteristicCategory == products[i].filters[j].characteristicCategory) {
              listFilters[k].characteristics.add(products[i].filters[j].value);
              flag = false;
              break;
            }
          }
          if (flag) {
            let tempset = new Set();
            tempset.add(products[i].filters[j].value);
            let tempdict = {characteristicCategory: products[i].filters[j].characteristicCategory, characteristics: tempset};
            listFilters.push(tempdict);
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
    for (let i = 0; i < prodlen; i++) {
      if (products[i].name.toLowerCase().search(currentSearch.toLowerCase()) != -1) {
        inCart = false;
        for (let j = 0; j < cartlen; j++) {
          if (products[i].name == products[cart[j].index].name) {
            inCart = true;
            break;
          }
        }

        let filtlen = products[i].filters.length;
        for (let j = 0; j < filtlen; j++) {
          let flag = true;
          let listfilterslen = listFilters.length;
          for (let k = 0; k < listfilterslen; k++) {
            if (listFilters[k].characteristicCategory == products[i].filters[j].characteristicCategory) {
              listFilters[k].characteristics.add(products[i].filters[j].value);
              flag = false;
              break;
            }
          }
          if (flag) {
            let tempset = new Set();
            tempset.add(products[i].filters[j].value);
            let tempdict = {characteristicCategory: products[i].filters[j].characteristicCategory, characteristics: tempset};
            listFilters.push(tempdict);
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

  // currentFilter = {characteristicCategory: String, values: String[]}[];
  const [currentFilter, setCurFilter] = useState([]);
  const [currentList, setCurrentList] = useState(info);
  let curFilter = [];

  const updateList = () => {
    let curInfo = structuredClone(info);
    let len = curInfo.length;
    let filtlen = curFilter.length;
    let flag = false;
    for (let i = 0; i < len; i++) {
      flag = false;
      for (let j = 0; j < curInfo[i].prod.filters.length; j++) {
        for (let k = 0; k < filtlen; k++) {
          // == currentFilter[k].CharacteristicCategory
          if (curInfo[i].prod.filters[j].characteristicCategory == "Производитель") {
            if (!curFilter[k].values.includes(curInfo[i].prod.filters[j].value)) {
              curInfo.splice(i, 1);
              i -= 1;
              len -= 1;
              flag = true;
              break;
            }
          }
        }
        if (flag) break;
      }
    }
    setCurrentList(curInfo);
  }

  // filter = {characteristicCategory: String, value: String};
  const changeCurrentFilter = (filter, action) => {
    curFilter = structuredClone(currentFilter);
    let flag = true;
    for (let i = 0; i < curFilter.length; i++) {
      if (curFilter[i].characteristicCategory == filter.characteristicCategory) {
        flag = false;
        if (action == "remove") {
          for (let j = 0; j < curFilter[i].values.length; j++) {
            if (curFilter[i].values[j] == filter.value) {
              curFilter[i].values.splice(j, 1);
              if (curFilter[i].values.length == 0) curFilter.splice(i, 1);
              break;
            }
          }
        } else curFilter[i].values.push(filter.value);
        break;
      }
    }
    if (flag) curFilter.push({characteristicCategory: filter.characteristicCategory, values: [filter.value]});
    updateList();
    setCurFilter(curFilter);
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
          {(() => {
          const values = [];
          if (listFilters.length == 0) return values;
          const mas = Array.from(listFilters[0].characteristics);
          for (let i = 0; i < mas.length; i++) {
            values.push(<Characteristic name={mas[i]} characteristicCategory="Производитель" changeCurrentFilter={changeCurrentFilter} rootClassName="characteristic-root-class-name3"></Characteristic>);
          }
          return values;
          })()}
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
          <Characteristic name="Действие акции"></Characteristic>
          {(() => {
          let categories = [];
          if (listFilters.length < 2) return categories;
          for (let i = 1; i < listFilters.length; i++) {
            let mas = Array.from(listFilters[i].characteristics);
            let values = [];
            for (let j = 0; j < mas.length; j++) {
              values.push(<Characteristic name={mas[j]} characteristicCategory={listFilters[i].characteristicCategory} changeCurrentFilter={changeCurrentFilter} rootClassName="characteristic-root-class-name3"></Characteristic>)
            }
            categories.push(<CharacteristicCategory text={listFilters[i].characteristicCategory}>{values}</CharacteristicCategory>);
          }
          return categories;
          })()}
        </div>
        <div className="katalog-container5">
          <SearchInfo amount={currentList.length} searchInfo={searchBaseOn}></SearchInfo>
          <div className="katalog-container6">

            {(() => {
              if (currentList.length == 0) {
                return (
                <span className="katalog-text-not-found">
                  По данному запросу ничего не нашлось
                </span>
                );
              } else { 
                return currentList.map((card) => (
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
