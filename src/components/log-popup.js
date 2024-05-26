import React, { useState } from 'react'

import PropTypes from 'prop-types'

import MyInput from './my-input'
import BaseButton from './base-button'
import RedButton from './red-button'
import './log-popup.css'

const LogPopup = (props) => {
  const [isVisible, setIsVisible] = useState(0)
  return (
    <div className={`log-popup-container ${props.rootClassName} `}>
      <div className="log-popup-container01">
        <button type="button" className="log-popup-button button">
          <img alt="image" src="/light9.svg" className="log-popup-image" />
        </button>
        {isVisible === 0 && (
          <div className="log-popup-container02">
            <span className="log-popup-text">Авторизация</span>
            <div className="log-popup-container03">
              <MyInput
                text="Введите еmail"
                rootClassName="my-input-root-class-name22"
                textinputPlaceholder="Email"
              ></MyInput>
              <MyInput
                text="Введите пароль"
                rootClassName="my-input-root-class-name23"
                textinputPlaceholder="Пароль"
              ></MyInput>
            </div>
            <div className="log-popup-container04">
              <div
                onClick={() => setIsVisible(1)}
                className="log-popup-container05"
              >
                <BaseButton
                  text="Забыли пароль?"
                  rootClassName="base-button-root-class-name11"
                ></BaseButton>
              </div>
              <div
                onClick={() => setIsVisible(2)}
                className="log-popup-container06"
              >
                <BaseButton
                  text="Регистрация"
                  rootClassName="base-button-root-class-name12"
                ></BaseButton>
              </div>
            </div>
            <RedButton
              text="Авторизироваться"
              rootClassName="red-button-root-class-name3"
            ></RedButton>
          </div>
        )}
        {isVisible === 1 && (
          <div className="log-popup-container07">
            <span className="log-popup-text01">Восстановление пароля</span>
            <div className="log-popup-container08">
              <MyInput
                text="Введите еmail"
                rootClassName="my-input-root-class-name24"
                textinputPlaceholder="Email"
              ></MyInput>
            </div>
            <div
              onClick={() => setIsVisible(0)}
              className="log-popup-container09"
            >
              <BaseButton
                text="Авторизация"
                rootClassName="base-button-root-class-name14"
              ></BaseButton>
            </div>
            <div
              onClick={() => setIsVisible(4)}
              className="log-popup-container10"
            >
              <RedButton
                text="Отправить"
                rootClassName="red-button-root-class-name4"
              ></RedButton>
            </div>
          </div>
        )}
        {isVisible === 2 && (
          <div className="log-popup-container11">
            <span className="log-popup-text02">Регистрация</span>
            <div className="log-popup-container12">
              <MyInput
                text="Введите никнейм"
                rootClassName="my-input-root-class-name25"
                textinputPlaceholder="Никнейм"
              ></MyInput>
              <MyInput
                text="Введите email"
                rootClassName="my-input-root-class-name26"
                textinputPlaceholder="Email"
              ></MyInput>
              <MyInput
                text="Введите пароль"
                rootClassName="my-input-root-class-name27"
                textinputPlaceholder="Пароль"
              ></MyInput>
              <MyInput
                text="Подтверждение пароля"
                rootClassName="my-input-root-class-name28"
                textinputPlaceholder="Пароль"
              ></MyInput>
            </div>
            <div className="log-popup-container13">
              <div
                onClick={() => setIsVisible(3)}
                className="log-popup-container14"
              >
                <BaseButton
                  text="Регистрация поставщиком"
                  rootClassName="base-button-root-class-name13"
                ></BaseButton>
              </div>
              <div
                onClick={() => setIsVisible(0)}
                className="log-popup-container15"
              >
                <BaseButton
                  text="Авторизация"
                  rootClassName="base-button-root-class-name15"
                ></BaseButton>
              </div>
            </div>
            <span className="log-popup-text03">
              <span>
                Регистрируясь, я принимаю условия
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="log-popup-text05">
                пользовательского соглашения
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <div
              onClick={() => setIsVisible(5)}
              className="log-popup-container16"
            >
              <RedButton
                text="Зарегистрироваться"
                rootClassName="red-button-root-class-name5"
              ></RedButton>
            </div>
          </div>
        )}
        {isVisible === 3 && (
          <div className="log-popup-container17">
            <span className="log-popup-text07">Регистрация поставщиком</span>
            <div className="log-popup-container18">
              <MyInput
                text="Название компании"
                rootClassName="my-input-root-class-name29"
                textinputPlaceholder="Название компании"
              ></MyInput>
              <MyInput
                text="ФИО владельца компании"
                rootClassName="my-input-root-class-name30"
                textinputPlaceholder="ФИО владельца компании"
              ></MyInput>
              <MyInput
                text="ИНН компании"
                rootClassName="my-input-root-class-name31"
                textinputPlaceholder="ИНН компании"
              ></MyInput>
              <MyInput
                text="Введите email"
                rootClassName="my-input-root-class-name32"
                textinputPlaceholder="Email"
              ></MyInput>
            </div>
            <div className="log-popup-container19">
              <div
                onClick={() => setIsVisible(2)}
                className="log-popup-container20"
              >
                <BaseButton
                  text="Регистрация"
                  rootClassName="base-button-root-class-name16"
                ></BaseButton>
              </div>
              <div
                onClick={() => setIsVisible(0)}
                className="log-popup-container21"
              >
                <BaseButton
                  text="Авторизация"
                  rootClassName="base-button-root-class-name17"
                ></BaseButton>
              </div>
            </div>
            <div
              onClick={() => setIsVisible(6)}
              className="log-popup-container22"
            >
              <RedButton
                text="Подать заявку"
                rootClassName="red-button-root-class-name6"
              ></RedButton>
            </div>
          </div>
        )}
        {isVisible === 4 && (
          <span className="log-popup-text08">
            Сообщение для восстановления пароля было отправлено на вашу эл.
            почту.
          </span>
        )}
        {isVisible === 5 && (
          <span className="log-popup-text09">
            Сообщение для подтверждения регистрации было отправлено на вашу эл.
            почту.
          </span>
        )}
        {isVisible === 6 && (
          <span className="log-popup-text10">
            Заявка успешно принята, ожидайте сообщения о подтверждении
            регистрации на вашу эл. почту.
          </span>
        )}
      </div>
    </div>
  )
}

LogPopup.defaultProps = {
  rootClassName: '',
}

LogPopup.propTypes = {
  rootClassName: PropTypes.string,
}

export default LogPopup
