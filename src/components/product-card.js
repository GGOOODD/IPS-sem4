import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import InCartButton from './in-cart-button'
import './product-card.css'

//return <div className="product-card-container2" style={{display: "flex", width: "80%", flexDirection: "row-reverse"}}>
//<div style={{width: "50%", justifyContent:"space-between"}}>{option}</div>
//</div>;
const ProductCard = (props) => {
  return (
    <div className={`product-card-container ${props.rootClassName} `}>
      <div className="product-card-container-image" onClick={() => {window.location.href = props.navigate; window.scrollTo(0, 0);}}>
        <img
          id="img"
          alt={props.imageAlt}
          src={props.prod.image}
          className="product-card-image"
        />
      </div>
      <span id="type" className="product-card-text">
        {props.prod.type}
      </span>
      <span id="name" className="product-card-text1">
        {props.prod.name}
      </span>
      {(() => {
          let option = [];
          if (props.prod.oldPrice == "") {
            option = <span id="cost" className="product-card-text2">{props.prod.price.concat(" р.")}</span>;
            return option;
          }
          option.push(<span id="cost" className="product-card-text2">{props.prod.price.concat(" р.")}</span>);
          option.push(<span className="product-card-text3" style={{marginRight: "12px"}}>{props.prod.oldPrice.concat(" р.")}</span>);

          return <div className="product-card-container2" style={{display: "flex", width: "100%",  justifyContent: "right", flexDirection: "row-reverse"}}>{option}</div>;
          })()}
      <InCartButton rootClassName="in-cart-button-root-class-name"
      prod={props.prod}
      //inCart={props.inCart}
      currentInCart={props.currentInCart}
      setCurrentInCart={props.setCurrentInCart}
      indexInList={props.indexInList}
      func={props.func}
      ></InCartButton>
    </div>
  )
}

ProductCard.defaultProps = {
  imageAlt: 'image',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  rootClassName: '',
}

ProductCard.propTypes = {
  inCart: PropTypes.bool,
  func: PropTypes.func,
  prod: PropTypes.object,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ProductCard
