import React, { useState } from 'react'

import PropTypes from 'prop-types'

import BaseButton from './base-button'
import './order-history.css'

const OrderHistory = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className={`order-history-container ${props.rootClassName} `}>
      <div className="order-history-container1">{props.children}</div>
      <div className="order-history-container2">
        <div className="order-history-container3">
          <span className="order-history-text">Номер заказа: </span>
          <span className="order-history-text01">{props.number}</span>
        </div>
        <div className="order-history-container4">
          <span className="order-history-text02">Дата заказа: </span>
          <span className="order-history-text03">{props.date}</span>
        </div>
        <div className="order-history-container5">
          <span className="order-history-text04">Статус заказа: </span>
          <span className="order-history-text05">{props.status}</span>
        </div>
        <div className="order-history-container6">
          <span className="order-history-text06">Оплачен: </span>
          <span className="order-history-text07">{props.statusOfPaid}</span>
        </div>
        <span className="order-history-text08">Общая стоимость</span>
        <span className="order-history-text09">{props.price}</span>
        {isVisible && (
          <div className="order-history-container7">
            <BaseButton
              text="Отменить"
              rootClassName="base-button-root-class-name9"
              className=""
            ></BaseButton>
          </div>
        )}
      </div>
    </div>
  )
}

OrderHistory.defaultProps = {
  date: 'Text',
  statusOfPaid: 'Text',
  rootClassName: '',
  number: 'Text',
  status: 'Text',
  price: '26 800 р.',
}

OrderHistory.propTypes = {
  date: PropTypes.string,
  statusOfPaid: PropTypes.string,
  rootClassName: PropTypes.string,
  number: PropTypes.string,
  status: PropTypes.string,
  price: PropTypes.string,
}

export default OrderHistory
