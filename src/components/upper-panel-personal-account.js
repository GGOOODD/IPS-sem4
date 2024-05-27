import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import UpperButton from './upper-button'
import './upper-panel-personal-account.css'


const UpperPanelPersonalAccount = (props) => {
  return (
    <div
      className={`upper-panel-personal-account-container ${props.rootClassName} `}
    >
      <div className="upper-panel-personal-account-container1">
        <Link to="/" className="upper-panel-personal-account-navlink">
          <img
            alt="image"
            src="/66371b43da6ca_1714887532_66371b43da6c2-200w.png"
            className="upper-panel-personal-account-image"
          />
        </Link>
        <div className="upper-panel-personal-account-container2">
          <Link
            to="/personal-account"
            className="upper-panel-personal-account-navlink1"
          >
            <UpperButton
              text="Личные данные"
              imageSrc1="/property%20342.svg"
              rootClassName="upper-button-root-class-name4"
              className="upper-panel-personal-account-component"
            ></UpperButton>
          </Link>
          <Link
            to="/personal-account-orders"
            className="upper-panel-personal-account-navlink2"
          >
            <UpperButton
              text="Заказы"
              imageSrc1="/light11.svg"
              rootClassName="upper-button-root-class-name2"
              className="upper-panel-personal-account-component1"
            ></UpperButton>
          </Link>
        </div>
        <div onClick={() => props.openPopup()}>
          <UpperButton
            text="Выход из аккаунта"
            imageSrc1="/light10.svg"
            rootClassName="upper-button-root-class-name3"
            className="upper-panel-personal-account-component2"
          ></UpperButton>
        </div>
      </div>
    </div>
  )
}

UpperPanelPersonalAccount.defaultProps = {
  rootClassName: '',
}

UpperPanelPersonalAccount.propTypes = {
  rootClassName: PropTypes.string,
}

export default UpperPanelPersonalAccount
