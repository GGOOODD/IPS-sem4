import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import UpperPanel from '../components/upper-panel'
import BigType from '../components/big-type'
import BottomPanel from '../components/bottom-panel'
import './kategory.css'

const types = require("../types");

const Kategory = (props) => {
  let params = new URLSearchParams(props.location.search);
  let currentKategory = decodeURI(params.get("name"));
  let info = []
  for (let i = 0; i < types.length; i++) {
    if (types[i].category == currentKategory) {
      let temp = {
        text: types[i].type,
        imageSrc: types[i].image,
        navigate: "/katalog/?type=".concat(types[i].type)
        // className="kategory-component1"
      }
      info.push(temp);
    }
  }
  
  return (
    <div className="kategory-container">
      <Helmet>
        <title>Kategory - IPS</title>
        <meta property="og:title" content="Kategory - IPS" />
      </Helmet>
      <UpperPanel rootClassName="upper-panel-root-class-name"></UpperPanel>
      <div className="kategory-container1">
        <span className="kategory-text">{currentKategory}</span>
        <div className="kategory-container2">

          {info.map((card) => (
            <Link to={card.navigate} className="kategory-navlink">
              <BigType
                text={card.text}
                imageSrc={card.imageSrc}
              ></BigType>
            </Link>
          ))}

        </div>
      </div>
      <BottomPanel rootClassName="bottom-panel-root-class-name"></BottomPanel>
    </div>
  )
}

export default Kategory
