import React from 'react'

import { Helmet } from 'react-helmet'

import UpperPanelPersonalAccount from '../components/upper-panel-personal-account'
import OrderHistory from '../components/order-history'
import ProductInHistory from '../components/product-in-history'
import BottomPanel from '../components/bottom-panel'
import './personal-account-orders.css'

const PersonalAccountOrders = (props) => {
  return (
    <div className="personal-account-orders-container">
      <Helmet>
        <title>Personal-account-Orders - IPS</title>
        <meta property="og:title" content="Personal-account-Orders - IPS" />
      </Helmet>
      <UpperPanelPersonalAccount rootClassName="upper-panel-personal-account-root-class-name"></UpperPanelPersonalAccount>
      <div className="personal-account-orders-container1">
        <span className="personal-account-orders-text">Заказы</span>
        <div className="personal-account-orders-container2">
          <span className="personal-account-orders-text1">Фильтры:</span>
          <span className="personal-account-orders-text2">Статус заказа</span>
          <select className="personal-account-orders-select">
            <option value="Все">Все</option>
            <option value="В пути">В пути</option>
            <option value="Ожидает">Ожидает</option>
            <option value="Завершён">Завершён</option>
          </select>
          <div className="personal-account-orders-container3">
            <span className="personal-account-orders-text3">Дата заказа</span>
            <div className="personal-account-orders-container4">
              <div className="personal-account-orders-container5">
                <button
                  type="button"
                  className="personal-account-orders-button button"
                >
                  <img
                    alt="image"
                    src="/property%20341.svg"
                    className="personal-account-orders-image"
                  />
                </button>
              </div>
              <div className="personal-account-orders-container6">
                <button
                  type="button"
                  className="personal-account-orders-button1 button"
                >
                  <img
                    alt="image"
                    src="/property%2034.svg"
                    className="personal-account-orders-image1"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="personal-account-orders-container7">
          <OrderHistory
            number="654575654"
            rootClassName="order-history-root-class-name"
            date="09.05.2024"
            status="Ожидает"
            statusOfPaid="Нет"
            price="26 800 р."
          >
            <ProductInHistory
              name="IBANEZ GRG121DX-BKF"
              type="Электрогитары"
              price="26 800 р."
              amount="1 шт."
              imageSrc="/product-200h.jpg"
              rootClassName="product-in-history-root-class-name"
            ></ProductInHistory>
          </OrderHistory>
          <OrderHistory
            number="637832653"
            date="15.01.2024"
            price="38 690 р."
            status="Завершён"
            statusOfPaid="Да"
          >
            <ProductInHistory
              name="TERRIS TLP-039 BK"
              type="Электрогитары"
              price="15 190 р."
              amount="1 шт."
              imageSrc="/abmqouyuayw4c0gg0goksc840-200h.jpg"
              rootClassName="product-in-history-root-class-name1"
            ></ProductInHistory>
            <ProductInHistory
              name="IBANEZ GRX40-BKN"
              type="Электрогитары"
              price="23 500 р."
              amount="1 шт."
              imageSrc="/7n6341samask48w4cgckco084-200h.jpg"
              rootClassName="product-in-history-root-class-name2"
            ></ProductInHistory>
          </OrderHistory>
        </div>
      </div>
      <BottomPanel rootClassName="bottom-panel-root-class-name8"></BottomPanel>
    </div>
  )
}

export default PersonalAccountOrders
