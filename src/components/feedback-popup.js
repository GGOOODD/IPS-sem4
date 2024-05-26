import React from 'react'

import PropTypes from 'prop-types'

import './feedback-popup.css'

const FeedbackPopup = (props) => {
  return (
    <div className={`feedback-popup-container ${props.rootClassName} `}>
      <div className="feedback-popup-container1">
        <button type="button" className="feedback-popup-button button">
          <img alt="image" src="/light9.svg" className="feedback-popup-image" />
        </button>
        <span className="feedback-popup-text">
          Ваше сообщение передано администрации и скоро вы получите ответ на
          вашу эл. почту.
        </span>
      </div>
    </div>
  )
}

FeedbackPopup.defaultProps = {
  rootClassName: '',
}

FeedbackPopup.propTypes = {
  rootClassName: PropTypes.string,
}

export default FeedbackPopup
