import React from 'react'

import { Helmet } from 'react-helmet'

import UpperPanelUnauth from '../components/upper-panel-unauth'
import Type from '../components/type'
import BottomPanel from '../components/bottom-panel'
import './home-unauth.css'

const HomeUnauth = (props) => {
  return (
    <div className="home-unauth-container">
      <Helmet>
        <title>HomeUnauth - IPS</title>
        <meta property="og:title" content="HomeUnauth - IPS" />
      </Helmet>
      <UpperPanelUnauth></UpperPanelUnauth>
      <div className="home-unauth-container1">
        <div
          data-thq="slider"
          data-navigation="true"
          data-pagination="true"
          className="home-unauth-slider swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="home-unauth-slider-slide swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="home-unauth-slider-slide1 swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="home-unauth-slider-slide2 swiper-slide"
            ></div>
          </div>
          <div
            data-thq="slider-pagination"
            className="home-unauth-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="swiper-button-next"
          ></div>
        </div>
        <span className="home-unauth-text">
          <span>Популярные типы товаров</span>
          <br></br>
        </span>
        <div className="home-unauth-container2">
          <Type
            text="Электрические гитары"
            imageSrc="/electric-200h.png"
            rootClassName="type-root-class-name3"
            className="home-unauth-component1"
          ></Type>
          <Type
            text="Акустические барабаны"
            imageSrc="/acoustic%20drum-200h.png"
            className="home-unauth-component2"
          ></Type>
          <Type
            text="Синтезаторы"
            imageSrc="/sintezator-200h.png"
            rootClassName="type-root-class-name4"
            className="home-unauth-component3"
          ></Type>
          <Type
            text="Акустические гитары"
            imageSrc="/acoustic1-200h.png"
            rootClassName="type-root-class-name5"
            className="home-unauth-component4"
          ></Type>
        </div>
      </div>
      <BottomPanel rootClassName="bottom-panel-root-class-name9"></BottomPanel>
    </div>
  )
}

export default HomeUnauth
