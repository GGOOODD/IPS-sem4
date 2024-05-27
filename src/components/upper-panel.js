import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import UpperButton from './upper-button'
import './upper-panel.css'

const UpperPanel = (props) => {

  function search(e) {
    let searchStr = document.getElementById("search").value;
    if (searchStr.replaceAll(" ", "").length == 0) {
      return;
    }
    window.location.href = "/katalog/?search=".concat(searchStr);
  }

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      search();
    }
  };

  return (
    <div className={`upper-panel-container ${props.rootClassName} `}>
      <div className="upper-panel-container1">
        <Link to="/" className="upper-panel-navlink">
          <img
            alt="image"
            src="/66371b43da6ca_1714887532_66371b43da6c2-200w.png"
            className="upper-panel-image"
          />
        </Link>
        <div data-thq="thq-dropdown" className="upper-panel-dropdown list-item">
          <div
            data-thq="thq-dropdown-toggle"
            className="upper-panel-dropdown-toggle"
          >
            <span className="upper-panel-text">Каталог</span>
            <img alt="image" src="/light5.svg" className="upper-panel-image1" />
          </div>
          <ul
            data-thq="thq-dropdown-list"
            className="upper-panel-dropdown-list"
          >
            <Link to="/kategory/?name=Гитары" className="">
              <li
                data-thq="thq-dropdown"
                className="upper-panel-dropdown1 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="upper-panel-dropdown-toggle1"
                >
                  <span className="upper-panel-text1">Гитары</span>
                </div>
              </li>
            </Link>
            <Link to="/kategory/?name=Клавишные%20инструменты" className="">
              <li
                data-thq="thq-dropdown"
                className="upper-panel-dropdown2 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="upper-panel-dropdown-toggle2"
                >
                  <span className="upper-panel-text2">
                    Клавишные инструменты
                  </span>
                </div>
              </li>
            </Link>
            <Link to="/kategory/?name=Ударные%20инструменты" className="">
              <li
                data-thq="thq-dropdown"
                className="upper-panel-dropdown3 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="upper-panel-dropdown-toggle3"
                >
                  <span className="upper-panel-text3">Ударные инструменты</span>
                </div>
              </li>
            </Link>
            <Link to="/kategory/?name=Духовые%20инструменты" className="">
              <li
                data-thq="thq-dropdown"
                className="upper-panel-dropdown4 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="upper-panel-dropdown-toggle4"
                >
                  <span className="upper-panel-text4">Духовые инструменты</span>
                </div>
              </li>
            </Link>
            <Link to="/kategory/?name=Смычковые%20инструменты" className="">
              <li
                data-thq="thq-dropdown"
                className="upper-panel-dropdown5 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="upper-panel-dropdown-toggle5"
                >
                  <span className="upper-panel-text5">
                    Смычковые инструменты
                  </span>
                </div>
              </li>
            </Link>
            <Link to="/kategory/?name=Аккордеоны%20и%20баяны" className="">
              <li
                data-thq="thq-dropdown"
                className="upper-panel-dropdown6 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="upper-panel-dropdown-toggle6"
                >
                  <span className="upper-panel-text6">Аккордеоны и баяны</span>
                </div>
              </li>
            </Link>
            <Link to="/kategory/?name=Этнические%20музыкальные%20инструменты" className="">
              <li
                data-thq="thq-dropdown"
                className="upper-panel-dropdown7 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="upper-panel-dropdown-toggle7"
                >
                  <span className="upper-panel-text7">
                    Этнические музыкальные инструменты
                  </span>
                </div>
              </li>
            </Link>
          </ul>
        </div>
        <div className="upper-panel-container2">
          <input onKeyPress={handleKeyPress}
            type="text"
            placeholder="Поиск"
            className="upper-panel-textinput input"
            id="search"
          />
          <button onClick={search} type="button" className="upper-panel-button button" style={{ cursor: "pointer" }}>
            <img alt="image" src="/light.svg" className="upper-panel-image2" />
          </button>
        </div>
        <Link to="/cart" className="upper-panel-navlink08">
          <UpperButton
            text="Корзина"
            imageSrc1="/light1.svg"
            rootClassName="upper-button-root-class-name"
            className="upper-panel-component"
          ></UpperButton>
        </Link>
        <Link to="/personal-account" className="upper-panel-navlink09">
          <UpperButton
            text="Личный кабинет"
            imageSrc1="/light2.svg"
            rootClassName="upper-button-root-class-name1"
            className="upper-panel-component1"
          ></UpperButton>
        </Link>
      </div>
    </div>
  )
}

UpperPanel.defaultProps = {
  rootClassName: '',
}

UpperPanel.propTypes = {
  rootClassName: PropTypes.string,
}

export default UpperPanel
