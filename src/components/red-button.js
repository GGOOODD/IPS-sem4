import React from 'react'

import PropTypes from 'prop-types'

import './red-button.css'

const RedButton = (props) => {
  return (
    <div className={`red-button-container ${props.rootClassName} `}>
      {(() => {
        let option = [];
        if (props.totalPrice == "0 р.") {
          option = <button id="incart" type="button" disabled="true" className="red-button-button button">
                    <span className="red-button-text">{props.text}</span>
                  </button>;
          return option;
        }
        return (<button id="incart" type="button" onClick={() => {window.location.href = "/checkout";}} className="red-button-button button">
                  <span className="red-button-text">{props.text}</span>
                </button>);
      })()}
    </div>
  )
}

RedButton.defaultProps = {
  text: 'text',
  rootClassName: '',
}

RedButton.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default RedButton
