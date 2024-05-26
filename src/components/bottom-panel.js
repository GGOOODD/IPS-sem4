import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import BaseButton from './base-button'
import './bottom-panel.css'

const BottomPanel = (props) => {
  return (
    <div className={`bottom-panel-container ${props.rootClassName} `}>
      <div className="bottom-panel-container1">
        <div className="bottom-panel-container2">
          <span className="bottom-panel-text">Контактная информация</span>
          <span className="bottom-panel-text01">
            <span className="">г. Томск, пр-кт Малоохтинский, д. 92</span>
            <br className=""></br>
            <span className="">ПН-ВС 10:00 – 21:00</span>
            <br className=""></br>
            <span className="">+7 812 XXX-47-07</span>
            <br className=""></br>
            <span className="">contact@gmail.com</span>
          </span>
        </div>
        <div className="bottom-panel-container3">
          <span className="bottom-panel-text09">Мы в соц. сетях</span>
          <div className="bottom-panel-container4">
            <img
              alt="image"
              src="/icon-telegram-logo.svg"
              className="bottom-panel-image"
            />
            <img
              alt="image"
              src="/vk-200h.png"
              className="bottom-panel-image1"
            />
          </div>
        </div>
        <div className="bottom-panel-container5">
          <span className="bottom-panel-text10">Возникли вопросы?</span>
          <Link to="/feedback" className="bottom-panel-navlink">
            <BaseButton
              text="Обратная связь"
              rootClassName="base-button-root-class-name"
              className="bottom-panel-component"
            ></BaseButton>
          </Link>
        </div>
      </div>
    </div>
  )
}

BottomPanel.defaultProps = {
  rootClassName: '',
}

BottomPanel.propTypes = {
  rootClassName: PropTypes.string,
}

export default BottomPanel
