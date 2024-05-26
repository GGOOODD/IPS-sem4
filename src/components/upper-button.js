import React from 'react'

import PropTypes from 'prop-types'

import './upper-button.css'

const UpperButton = (props) => {
  return (
    <div className={`upper-button-container ${props.rootClassName} `}>
      <button type="button" className="upper-button-button button" style={{ cursor: "pointer" }}>
        <img
          alt={props.imageAlt1}
          src={props.imageSrc1}
          className="upper-button-image"
        />
        <span className="upper-button-text">{props.text}</span>
      </button>
    </div>
  )
}

UpperButton.defaultProps = {
  rootClassName: '',
  text: 'Text',
  imageSrc1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageAlt1: 'image',
}

UpperButton.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt1: PropTypes.string,
}

export default UpperButton
