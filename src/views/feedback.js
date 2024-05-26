import React from 'react'

import { Helmet } from 'react-helmet'

import UpperPanel from '../components/upper-panel'
import MyInput from '../components/my-input'
import BaseButton from '../components/base-button'
import BottomPanel from '../components/bottom-panel'
import './feedback.css'

const Feedback = (props) => {
  return (
    <div className="feedback-container">
      <Helmet>
        <title>Feedback - IPS</title>
        <meta property="og:title" content="Feedback - IPS" />
      </Helmet>
      <UpperPanel rootClassName="upper-panel-root-class-name5"></UpperPanel>
      <div className="feedback-container1">
        <div className="feedback-container2">
          <span className="feedback-text">Обратная связь</span>
          <MyInput
            text="Ваш email"
            rootClassName="my-input-root-class-name9"
            textinputPlaceholder="Email"
          ></MyInput>
          <textarea
            placeholder="Сообщение"
            className="feedback-textarea textarea"
          ></textarea>
          <BaseButton
            text="Отправить"
            rootClassName="base-button-root-class-name10"
          ></BaseButton>
        </div>
      </div>
      <BottomPanel rootClassName="bottom-panel-root-class-name6"></BottomPanel>
    </div>
  )
}

export default Feedback
