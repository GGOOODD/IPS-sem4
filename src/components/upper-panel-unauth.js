import React from 'react'
import { Link } from 'react-router-dom'

import UpperButton from './upper-button'
import './upper-panel-unauth.css'

const UpperPanelUnauth = (props) => {
  return (
    <div className="upper-panel-unauth-container">
      <div className="upper-panel-unauth-container1">
        <Link to="/" className="upper-panel-unauth-navlink">
          <img
            alt="image"
            src="/66371b43da6ca_1714887532_66371b43da6c2-200w.png"
            className="upper-panel-unauth-image"
          />
        </Link>
        <div
          data-thq="thq-dropdown"
          className="upper-panel-unauth-dropdown list-item"
        >
          <div
            data-thq="thq-dropdown-toggle"
            className="upper-panel-unauth-dropdown-toggle"
          >
            <span className="upper-panel-unauth-text">Каталог</span>
            <img
              alt="image"
              src="/light5.svg"
              className="upper-panel-unauth-image1"
            />
          </div>
          <ul
            data-thq="thq-dropdown-list"
            className="upper-panel-unauth-dropdown-list"
          >
            <Link to="/kategory">
              <li
                data-thq="thq-dropdown"
                className="upper-panel-unauth-dropdown1 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="upper-panel-unauth-dropdown-toggle1"
                >
                  <span className="upper-panel-unauth-text1">Гитары</span>
                </div>
              </li>
            </Link>
            <Link to="/kategory">
              <li
                data-thq="thq-dropdown"
                className="upper-panel-unauth-dropdown2 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="upper-panel-unauth-dropdown-toggle2"
                >
                  <span className="upper-panel-unauth-text2">
                    Клавишные инструменты
                  </span>
                </div>
              </li>
            </Link>
            <Link to="/kategory">
              <li
                data-thq="thq-dropdown"
                className="upper-panel-unauth-dropdown3 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="upper-panel-unauth-dropdown-toggle3"
                >
                  <span className="upper-panel-unauth-text3">
                    Ударные инструменты
                  </span>
                </div>
              </li>
            </Link>
            <Link to="/kategory">
              <li
                data-thq="thq-dropdown"
                className="upper-panel-unauth-dropdown4 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="upper-panel-unauth-dropdown-toggle4"
                >
                  <span className="upper-panel-unauth-text4">
                    Духовые инструменты
                  </span>
                </div>
              </li>
            </Link>
            <Link to="/kategory">
              <li
                data-thq="thq-dropdown"
                className="upper-panel-unauth-dropdown5 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="upper-panel-unauth-dropdown-toggle5"
                >
                  <span className="upper-panel-unauth-text5">
                    Смычковые инструменты
                  </span>
                </div>
              </li>
            </Link>
            <Link to="/kategory">
              <li
                data-thq="thq-dropdown"
                className="upper-panel-unauth-dropdown6 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="upper-panel-unauth-dropdown-toggle6"
                >
                  <span className="upper-panel-unauth-text6">
                    Аккордеоны и баяны
                  </span>
                </div>
              </li>
            </Link>
            <Link to="/kategory">
              <li
                data-thq="thq-dropdown"
                className="upper-panel-unauth-dropdown7 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="upper-panel-unauth-dropdown-toggle7"
                >
                  <span className="upper-panel-unauth-text7">
                    Этнические музыкальные инструменты
                  </span>
                </div>
              </li>
            </Link>
          </ul>
        </div>
        <div className="upper-panel-unauth-container2">
          <input
            type="text"
            placeholder="Поиск"
            className="upper-panel-unauth-textinput input"
          />
          <button type="button" className="upper-panel-unauth-button button">
            <img
              alt="image"
              src="/light.svg"
              className="upper-panel-unauth-image2"
            />
          </button>
        </div>
        <UpperButton
          text="Корзина"
          imageSrc1="/light1.svg"
          rootClassName="upper-button-root-class-name5"
          className="upper-panel-unauth-component"
        ></UpperButton>
        <UpperButton
          text="Регистрация/Вход"
          imageSrc1="/log%20in.svg"
          rootClassName="upper-button-root-class-name6"
          className="upper-panel-unauth-component1"
        ></UpperButton>
      </div>
    </div>
  )
}

export default UpperPanelUnauth
