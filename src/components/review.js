import React from 'react'

import PropTypes from 'prop-types'

import './review.css'

const Review = (props) => {
  return (
    <div className="review-container">
      <div className="review-container1">
        <img
          alt={props.imageAltPhoto}
          src={props.imageSrcPhoto}
          className="review-image"
        />
        <span>{props.nickname}</span>
        <div className="review-container2">
          <div className="review-container3">
            <img
              alt={props.imageAlt1Star}
              src={props.imageSrc1Star}
              className="review-image1"
            />
            <img
              alt={props.imageAlt2Star}
              src={props.imageSrc2Star}
              className="review-image2"
            />
            <img
              alt={props.imageAlt3Star}
              src={props.imageSrc3Star}
              className="review-image3"
            />
            <img
              alt={props.imageAlt4Star}
              src={props.imageSrc4Star}
              className="review-image4"
            />
            <img
              alt={props.imageAlt5Star}
              src={props.imageSrc5Star}
              className="review-image5"
            />
          </div>
          <span className="review-text1">{props.date}</span>
        </div>
      </div>
      <div className="review-container4">
        <span className="review-text2">{props.review}</span>
      </div>
    </div>
  )
}

Review.defaultProps = {
  imageAlt1Star: 'image',
  imageAlt2Star: 'image',
  imageSrcPhoto: 'https://play.teleporthq.io/static/svg/default-img.svg',
  nickname: 'Text',
  imageAlt3Star: 'image',
  imageAlt4Star: 'image',
  imageSrc3Star: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageSrc4Star: 'https://play.teleporthq.io/static/svg/default-img.svg',
  date: 'Text',
  imageAlt5Star: 'image',
  review: 'Text',
  imageSrc5Star: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageSrc2Star: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageSrc1Star: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageAltPhoto: 'image',
}

Review.propTypes = {
  imageAlt1Star: PropTypes.string,
  imageAlt2Star: PropTypes.string,
  imageSrcPhoto: PropTypes.string,
  nickname: PropTypes.string,
  imageAlt3Star: PropTypes.string,
  imageAlt4Star: PropTypes.string,
  imageSrc3Star: PropTypes.string,
  imageSrc4Star: PropTypes.string,
  date: PropTypes.string,
  imageAlt5Star: PropTypes.string,
  review: PropTypes.string,
  imageSrc5Star: PropTypes.string,
  imageSrc2Star: PropTypes.string,
  imageSrc1Star: PropTypes.string,
  imageAltPhoto: PropTypes.string,
}

export default Review
