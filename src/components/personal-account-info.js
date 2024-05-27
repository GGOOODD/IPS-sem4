import React, { useState } from 'react'

import PropTypes from 'prop-types'

import BaseButton from './base-button'
import MyInput from './my-input'
import './personal-account-info.css'

const PersonalAccountInfo = (props) => {
  const [isPage, setIsPage] = useState(0)
  const [isChosen, setIsChosen] = useState(0)

  const handleSel = (event) => {
    let sel = event.target.value;
    if (sel == "Проспект") setIsChosen(0);
    else if (sel == "Улица") setIsChosen(1);
    else setIsChosen(2);
  }

  return (
    <div className={`personal-account-info-container ${props.rootClassName} `}>
      {isPage === 0 && (
        <div className="personal-account-info-container01">
          <span className="personal-account-info-text">Личные данные</span>
          <div className="personal-account-info-container02">
            <img
              alt="image"
              src="/scale_1200-400h.png"
              className="personal-account-info-image"
            />
            <div className="personal-account-info-container03">
              <span className="personal-account-info-text01">Никнейм:</span>
              <span className="personal-account-info-text02">Awoca</span>
              <span className="personal-account-info-text03">Почта:</span>
              <span className="personal-account-info-text04">
                awoca@gmail.com
              </span>
              <span className="personal-account-info-text05">
                Номер телефона:
              </span>
              <span className="personal-account-info-text06">
                +7 812 XXX-47-07
              </span>
              <span className="personal-account-info-text07">
                Адрес проживания:
              </span>
              <span className="personal-account-info-text08">
                г. Томск, пр-кт Малоохтинский, д. 92
              </span>
              <div className="personal-account-info-container04">
                <div
                  onClick={() => setIsPage(1)}
                  className="personal-account-info-container05"
                >
                  <BaseButton
                    text="Редактировать"
                    rootClassName="base-button-root-class-name3"
                    className=""
                  ></BaseButton>
                </div>
                <div
                  onClick={() => setIsPage(2)}
                  className="personal-account-info-container06"
                >
                  <BaseButton
                    text="Изменить пароль"
                    rootClassName="base-button-root-class-name4"
                    className=""
                  ></BaseButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isPage === 1 && (
        <div className="personal-account-info-container07">
          <span className="personal-account-info-text09">
            Редактирование данных
          </span>
          <div className="personal-account-info-container08">
            <div className="personal-account-info-container09">
              <span className="personal-account-info-text10">Фото</span>
              <input
                type="file"
                placeholder="placeholder"
                className="personal-account-info-textinput input"
              />
            </div>
            <MyInput
              text="Никнейм"
              rootClassName="my-input-root-class-name11"
              textinputPlaceholder="Никнейм"
              className=""
            ></MyInput>
            <MyInput
              text="Номер телефона"
              rootClassName="my-input-root-class-name10"
              textinputPlaceholder="Номер телефона"
              className=""
            ></MyInput>
          </div>
          <span className="personal-account-info-text11">Адрес проживания</span>
          <div className="personal-account-info-container10">
            <MyInput
              text="Область"
              rootClassName="my-input-root-class-name12"
              textinputPlaceholder="Область"
              className=""
            ></MyInput>
            <MyInput
              text="Город"
              rootClassName="my-input-root-class-name13"
              textinputPlaceholder="Город"
              className=""
            ></MyInput>
            <select onChange={handleSel.bind(this)} className="personal-account-info-select">
              <option value="Проспект" className="">
                Проспект
              </option>
              <option value="Улица" className="">
                Улица
              </option>
              <option value="Площадь" className="">
                Площадь
              </option>
            </select>
            {isChosen === 0 && (
              <div className="personal-account-info-container11">
                <MyInput
                  text="Проспект"
                  rootClassName="my-input-root-class-name17"
                  textinputPlaceholder="Проспект"
                  className=""
                ></MyInput>
              </div>
            )}
            {isChosen === 1 && (
              <div className="personal-account-info-container12">
                <MyInput
                  text="Улица"
                  rootClassName="my-input-root-class-name18"
                  textinputPlaceholder="Улица"
                  className=""
                ></MyInput>
              </div>
            )}
            {isChosen === 2 && (
              <div className="personal-account-info-container13">
                <MyInput
                  text="Площадь"
                  rootClassName="my-input-root-class-name19"
                  textinputPlaceholder="Площадь"
                  className=""
                ></MyInput>
              </div>
            )}
            <MyInput
              text="Дом"
              rootClassName="my-input-root-class-name14"
              textinputPlaceholder="Дом"
              className=""
            ></MyInput>
            <MyInput
              text="Строение"
              rootClassName="my-input-root-class-name15"
              textinputPlaceholder="Строение"
              className=""
            ></MyInput>
            <MyInput
              text="Квартира"
              rootClassName="my-input-root-class-name16"
              textinputPlaceholder="Квартира"
              className=""
            ></MyInput>
          </div>
          <div className="personal-account-info-container14">
            <div
              onClick={() => setIsPage(0)}
              className="personal-account-info-container15"
            >
              <BaseButton
                text="Отмена"
                rootClassName="base-button-root-class-name5"
                className=""
              ></BaseButton>
            </div>
            <div
              onClick={() => setIsPage(0)}
              className="personal-account-info-container16"
            >
              <BaseButton
                text="Сохранить"
                rootClassName="base-button-root-class-name6"
                className=""
              ></BaseButton>
            </div>
          </div>
        </div>
      )}
      {isPage === 2 && (
        <div className="personal-account-info-container17">
          <span className="personal-account-info-text12">Изменение пароля</span>
          <div className="personal-account-info-container18">
            <MyInput
              text="Новый пароль"
              rootClassName="my-input-root-class-name20"
              textinputPlaceholder="Пароль"
              className=""
            ></MyInput>
            <MyInput
              text="Подтверждение пароля"
              rootClassName="my-input-root-class-name21"
              textinputPlaceholder="Пароль"
              className=""
            ></MyInput>
            <div className="personal-account-info-container19">
              <div
                onClick={() => setIsPage(0)}
                className="personal-account-info-container20"
              >
                <BaseButton
                  text="Отмена"
                  rootClassName="base-button-root-class-name7"
                  className=""
                ></BaseButton>
              </div>
              <div
                onClick={() => setIsPage(0)}
                className="personal-account-info-container21"
              >
                <BaseButton
                  text="Сохранить"
                  rootClassName="base-button-root-class-name8"
                  className=""
                ></BaseButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

PersonalAccountInfo.defaultProps = {
  rootClassName1: '',
  rootClassName: '',
}

PersonalAccountInfo.propTypes = {
  rootClassName1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default PersonalAccountInfo
