import React, { useState } from 'react'

import PropTypes from 'prop-types'

import MyInput from './my-input'
import './receive-method.css'

const ReceiveMethod = (props) => {
  const [isSelector, setIsSelector] = useState(false)
  const [isChosen, setIsChosen] = useState(0)
  let method = "В пункте выдачи";
  let sel = "Проспект";
  const handleChange = (event) => {
    method = event.target.value;
    if (method != "В пункте выдачи") setIsSelector(true);
    else setIsSelector(false);
    setIsChosen(0);
  }

  const handleSel = (event) => {
    sel = event.target.value;
    if (sel == "Проспект") setIsChosen(0);
    else if (sel == "Улица") setIsChosen(1);
    else setIsChosen(2);
  }

  return (
    <div className={`receive-method-container ${props.rootClassName} `}>
      <div className="receive-method-container1"></div>
      <span className="receive-method-text">
        <span className="">Способ получения:</span>
        <br className=""></br>
      </span>
      <div className="receive-method-container2">
        <form name="method1" className="receive-method-form">
          <span className="receive-method-text3">В пункте выдачи</span>
          <input
            type="radio"
            name="receiveMethod"
            value="В пункте выдачи"
            defaultChecked={true}
            onChange={handleChange.bind(this)}
            className="receive-method-radiobutton"
            style={{ cursor: "pointer" }}
          />
          <span className="receive-method-text4">Доставка</span>
          <input
            type="radio"
            name="receiveMethod"
            value="Доставка"
            onChange={handleChange.bind(this)}
            // onClick={() => setIsSelector(1)}
            className=""
            style={{ cursor: "pointer" }}
          />
        </form>
      </div>
      {isSelector === false && (
        <div className="receive-method-container3">
          <span className="receive-method-text5">Выберите пункт выдачи:</span>
          <select className="receive-method-select" style={{ cursor: "pointer" }}>
            <option value="Выбрать" className="">
              Выбрать
            </option>
            <option value="г. Томск, Иркутский, дом 54" className="">
              г. Томск, Иркутский, дом 54
            </option>
            <option
              value="г. Томск, Мира, пр-кт, дом 48, корпус 3"
              className=""
            >
              г. Томск, Мира, пр-кт, дом 48, корпус 3
            </option>
            <option value="г. Томск, пер. Асфальтовый, дом 8" className="">
              г. Томск, пер. Асфальтовый, дом 8
            </option>
            <option value="г. Томск, Беринга, дом 10" className="">
              г. Томск, Беринга, дом 10
            </option>
            <option value="г. Томск, Красноармейская, д. 114" className="">
              г. Томск, Красноармейская, д. 114
            </option>
            <option value="г. Томск, Фрунзе, дом 92, корпус Г" className="">
              г. Томск, Фрунзе, дом 92, корпус Г
            </option>
          </select>
        </div>
      )}
      {isSelector === true && (
        <div className="receive-method-container4">
          <MyInput
            text="Область"
            rootClassName="my-input-root-class-name1"
            textinputPlaceholder="Область"
            className=""
          ></MyInput>
          <MyInput
            text="Город"
            rootClassName="my-input-root-class-name2"
            textinputPlaceholder="Город"
            className=""
          ></MyInput>
          <select onChange={handleSel.bind(this)} className="receive-method-select1">
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
            <div className="receive-method-container5">
              <MyInput
                text="Проспект"
                rootClassName="my-input-root-class-name3"
                textinputPlaceholder="Проспект"
                className=""
              ></MyInput>
            </div>
          )}
          {isChosen === 1 && (
            <div className="receive-method-container6">
              <MyInput
                text="Улица"
                rootClassName="my-input-root-class-name4"
                textinputPlaceholder="Улица"
                className=""
              ></MyInput>
            </div>
          )}
          {isChosen === 2 && (
            <div className="receive-method-container7">
              <MyInput
                text="Площадь"
                rootClassName="my-input-root-class-name5"
                textinputPlaceholder="Площадь"
                className=""
              ></MyInput>
            </div>
          )}
          <MyInput
            text="Дом"
            rootClassName="my-input-root-class-name6"
            textinputPlaceholder="Дом"
            className=""
          ></MyInput>
          <MyInput
            text="Строение"
            rootClassName="my-input-root-class-name7"
            textinputPlaceholder="Строение"
            className=""
          ></MyInput>
          <MyInput
            text="Квартира"
            rootClassName="my-input-root-class-name8"
            textinputPlaceholder="Квартира"
            className=""
          ></MyInput>
        </div>
      )}
    </div>
  )
}

ReceiveMethod.defaultProps = {
  rootClassName: '',
}

ReceiveMethod.propTypes = {
  rootClassName: PropTypes.string,
}

export default ReceiveMethod
