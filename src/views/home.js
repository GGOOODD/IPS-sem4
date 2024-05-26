import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import UpperPanel from '../components/upper-panel'
import Type from '../components/type'
import BottomPanel from '../components/bottom-panel'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>IPS</title>
        <meta property="og:title" content="IPS" />
      </Helmet>
      <UpperPanel></UpperPanel>
      <div className="home-container1">
        <div
          data-thq="slider"
          data-navigation="true"
          data-pagination="true"
          className="home-slider swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="home-slider-slide swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="home-slider-slide1 swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="home-slider-slide2 swiper-slide"
            ></div>
          </div>
          <div
            data-thq="slider-pagination"
            className="home-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
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
        <span className="home-text">
          <span>Популярные типы товаров</span>
          <br></br>
        </span>
        <div className="home-container2">
          <Link to="/katalog/?type=Электрогитары" className="home-navlink">
            <Type
              text="Электрогитары"
              imageSrc="/types/electric-200h.png"
              rootClassName="type-root-class-name"
              className="home-component1"
            ></Type>
          </Link>
          <Link to="/katalog/?type=Акустические%20барабаны" className="home-navlink1">
            <Type
              text="Акустические барабаны"
              imageSrc="/types/acoustic%20drum-200h.png"
              className="home-component2"
            ></Type>
          </Link>
          <Link to="/katalog/?type=Синтезаторы" className="home-navlink2">
            <Type
              text="Синтезаторы"
              imageSrc="/types/sintezator-200h.png"
              rootClassName="type-root-class-name2"
              className="home-component3"
            ></Type>
          </Link>
          <Link to="/katalog/?type=Акустические%20гитары" className="home-navlink3">
            <Type
              text="Акустические гитары"
              imageSrc="/types/acoustic-200h.png"
              rootClassName="type-root-class-name1"
              className="home-component4"
            ></Type>
          </Link>
        </div>
      </div>
      <BottomPanel rootClassName="bottom-panel-root-class-name1"></BottomPanel>
    </div>
  )
}

export default Home
