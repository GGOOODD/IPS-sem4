import React from 'react'

import PropTypes from 'prop-types'

import InCartButton from './in-cart-button'
import BaseButton from './base-button'
import Review from './review'
import './product-page.css'

const products = require("../products");



const ProductPage = (props) => {
  return (
    <div className={`product-page-container ${props.rootClassName} `}>
      <div className="product-page-container01">
        <img
          alt={props.imageAltProduct}
          src={props.imageSrcProduct}
          className="product-page-image"
        />
        <div className="product-page-container02">
          <div className="product-page-container03">
            <span className="product-page-text">{props.name}</span>
            <div className="product-page-container04">
              <span className="product-page-text01">Тип товара:</span>
              <span className="product-page-text02">{props.type}</span>
            </div>
            <div className="product-page-container05">
              <span className="product-page-text03">
                <span className="">Производитель:</span>
                <br className=""></br>
              </span>
              <span className="product-page-text06">{props.manufacturer}</span>
            </div>
            <div className="product-page-container06">
              <span className="product-page-text07">Описание:</span>
              <span className="product-page-text08">{props.description}</span>
            </div>
            <div className="product-page-container07">
              <span className="product-page-text09">Гарантия:</span>
              <span className="Content">{props.guarantee}</span>
            </div>
          </div>
          <div className="product-page-container08">
            <span className="product-page-text11">{props.price}</span>
            <InCartButton
              rootClassName="in-cart-button-root-class-name1"
              className=""
              inCart={props.inCart}
              func={props.func}
            ></InCartButton>
          </div>
        </div>
      </div>
      <div className="product-page-container09">
        <span className="product-page-text12">
          <span className="">Характеристики</span>
          <br className=""></br>
        </span>

        {products[props.index].filters.map((card) => (
          <span className="product-page-text15">{card.characteristicCategory.concat(": ", card.value)}</span>
        ))}

      </div>
      <div className="product-page-container10">
        <span className="product-page-text16">Отзывы</span>
        <div className="product-page-container11">
          <textarea
            placeholder="Оставить отзыв"
            className="product-page-textarea textarea"
          ></textarea>
          <div className="product-page-container12">
            <div className="product-page-container13">
              <img
                alt="image"
                src="/light6.svg"
                className="product-page-image01"
              />
              <img
                alt="image"
                src="/light6.svg"
                className="product-page-image02"
              />
              <img
                alt="image"
                src="/light6.svg"
                className="product-page-image03"
              />
              <img
                alt="image"
                src="/light6.svg"
                className="product-page-image04"
              />
              <img
                alt="image"
                src="/light6.svg"
                className="product-page-image05"
              />
            </div>
            <BaseButton
              text="Отправить"
              rootClassName="base-button-root-class-name1"
              className=""
            ></BaseButton>
          </div>
        </div>
        <div className="product-page-container14"></div>
        <div className="product-page-container15">
          <div className="product-page-container16">
            <Review
              date="13 апреля 2023"
              review="Хороший внешний вид, звук обычный на свои деньги, качество исполнения на 3. Переключатели тона не закреплены и болтаются, ручки проворачиваются и тащат за собой внутрянку, переключатель звукоснимателей установлен криво, после замены струн обнаружил, что бридж в какой-то неестественной позе - штырь из деки вылез на несколько миллиметров. Надеюсь, не вырвет. Внутри все в деревянной стружке, так что будьте аккуратны, если полезете. Если доделать - нормально"
              nickname="Awoca"
              imageSrc1Star="/filled.svg"
              imageSrc2Star="/filled.svg"
              imageSrc3Star="/filled.svg"
              imageSrc4Star="/light6.svg"
              imageSrc5Star="/light6.svg"
              imageSrcPhoto="/4410d6aa0f1061273a848eaba9a243d9-200h.jpg"
              className=""
            ></Review>
            <Review
              date="13 апреля 2023"
              review="Вчера взял этот инструмент. По сравнению с прошлой гитарой, Fabio ST200 - небо и земля. Все полностью устраивает, качество хорошее. Читал, что из-за тремоло не держит строй, но на практике такой проблемы не обнаружил, возможно потому что я еще заказывал настройку и замену струн. А так, рекомендую гитару к покупке как новичкам, так и более продвинутым игрокам."
              nickname="GGOOODD"
              imageSrc1Star="/filled.svg"
              imageSrc2Star="/filled.svg"
              imageSrc3Star="/filled.svg"
              imageSrc4Star="/filled.svg"
              imageSrc5Star="/filled.svg"
              imageSrcPhoto="/scale_1200-200h.png"
              className=""
            ></Review>
            <Review
              date="13 апреля 2023"
              review="Отличная гитара, первую такую же гитару я приобрел в другом интернет магазине, она оказалась с браком, поэтому я ее вернул и поехал в Музторг за такой же заказал услугу отстройки, результатом очень доволен. Хороший магазин, хорошие сотрудники, отличная гитара, скоро поеду за еще одной, приглянулась) Спасибо!"
              nickname="Grant"
              imageSrc1Star="/filled.svg"
              imageSrc2Star="/filled.svg"
              imageSrc3Star="/filled.svg"
              imageSrc4Star="/filled.svg"
              imageSrc5Star="/filled.svg"
              imageSrcPhoto="/40cee25e2b1356a3918935347e6d76b6-200w.jpg"
              className=""
            ></Review>
            <Review
              date="13 апреля 2023"
              review="Спустя почти год после покупки отвалился верхний порожек (У него ещ радиус не соответствовал, кончики были немного приподняты) и выгнуло гриф (анкер не помогает) Но в целом палка классная."
              nickname="HelloKit"
              imageSrc1Star="/filled.svg"
              imageSrc2Star="/filled.svg"
              imageSrc3Star="/filled.svg"
              imageSrc4Star="/filled.svg"
              imageSrc5Star="/light6.svg"
              imageSrcPhoto="/4410d6aa0f1061273a848eaba9a243d9-200h.jpg"
              className=""
            ></Review>
          </div>
          <div className="product-page-container17">
            <span className="product-page-text17">Общий рейтинг</span>
            <div className="product-page-container18">
              <img
                alt="image"
                src="/filled.svg"
                className="product-page-image06"
              />
              <img
                alt="image"
                src="/filled.svg"
                className="product-page-image07"
              />
              <img
                alt="image"
                src="/filled.svg"
                className="product-page-image08"
              />
              <img
                alt="image"
                src="/filled.svg"
                className="product-page-image09"
              />
              <img
                alt="image"
                src="/light6.svg"
                className="product-page-image10"
              />
            </div>
            <span className="product-page-text18">Отзывов: 26</span>
            <span className="product-page-text19">
              Отображать отзывы по рейтингу:
            </span>
            <div className="product-page-container19">
              <div className="product-page-container20">
                <button type="button" className="product-page-button button">
                  <img
                    alt="image"
                    src="/property%20341.svg"
                    className="product-page-image11"
                  />
                </button>
              </div>
              <div className="product-page-container21">
                <button type="button" className="product-page-button1 button">
                  <img
                    alt="image"
                    src="/property%2034.svg"
                    className="product-page-image12"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ProductPage.defaultProps = {
  manufacturer: 'Text',
  imageSrcProduct: 'https://play.teleporthq.io/static/svg/default-img.svg',
  name: 'Text',
  guarantee: 'Text',
  description: 'Text',
  imageAltProduct: 'image',
  rootClassName: '',
  type: 'Text',
  price: 'Text',
}

ProductPage.propTypes = {
  manufacturer: PropTypes.string,
  imageSrcProduct: PropTypes.string,
  name: PropTypes.string,
  guarantee: PropTypes.string,
  description: PropTypes.string,
  imageAltProduct: PropTypes.string,
  rootClassName: PropTypes.string,
  type: PropTypes.string,
  price: PropTypes.string,
}

export default ProductPage
