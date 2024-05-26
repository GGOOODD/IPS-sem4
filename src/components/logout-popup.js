import React from 'react'

import PropTypes from 'prop-types'

import BaseButton from './base-button'
import './logout-popup.css'

const LogoutPopup = (props) => {
  return (
    <div className={`logout-popup-container ${props.rootClassName} `}>
      <div className="logout-popup-container1">
        <button type="button" className="logout-popup-button button">
          <img alt="image" src="/light9.svg" className="logout-popup-image" />
        </button>
        <span className="logout-popup-text">
          Вы действительно хотите выйти из аккаунта?
        </span>
        <div className="logout-popup-container2">
          <BaseButton
            rootClassName="base-button-root-class-name25"
            text="Отмена"
          ></BaseButton>
          <BaseButton
            rootClassName="base-button-root-class-name26"
            text="Выйти"
          ></BaseButton>
        </div>
      </div>
    </div>
  )
}

LogoutPopup.defaultProps = {
  rootClassName: '',
}

LogoutPopup.propTypes = {
  rootClassName: PropTypes.string,
}

export default LogoutPopup
