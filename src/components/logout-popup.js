import React from 'react'

import PropTypes from 'prop-types'

import BaseButton from './base-button'
import './logout-popup.css'

const LogoutPopup = (props) => {
  return (
    <div className={`logout-popup-container ${props.rootClassName} `}>
      <div className="logout-popup-container1">
        <div onClick={() => props.closePopup()}>
          <button type="button" className="logout-popup-button button" style={{cursor: "pointer"}}>
            <img alt="image" src="/light9.svg" className="logout-popup-image" />
          </button>
        </div>
        <span className="logout-popup-text">
          Вы действительно хотите выйти из аккаунта?
        </span>
        <div className="logout-popup-container2">
          <div onClick={() => props.closePopup()}>
            <BaseButton
              rootClassName="base-button-root-class-name25"
              text="Отмена"
            ></BaseButton>
          </div>
          <div onClick={() => window.location.href = "/"}>
            <BaseButton
              rootClassName="base-button-root-class-name26"
              text="Выйти"
            ></BaseButton>
          </div>
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
