import React, { useState } from 'react'

import { Helmet } from 'react-helmet'

import UpperPanelPersonalAccount from '../components/upper-panel-personal-account'
import PersonalAccountInfo from '../components/personal-account-info'
import BottomPanel from '../components/bottom-panel'
import LogoutPopup from '../components/logout-popup'
import './personal-account.css'

const PersonalAccount = (props) => {
  const [popup, setPopup] = useState(false);
  
  return (
    <div className="personal-account-container">
      <Helmet>
        <title>Personal-account - IPS</title>
        <meta property="og:title" content="Personal-account - IPS" />
      </Helmet>
      <UpperPanelPersonalAccount openPopup={() => setPopup(true)}></UpperPanelPersonalAccount>
      <div className="personal-account-container1">
        <PersonalAccountInfo rootClassName="personal-account-info-root-class-name"></PersonalAccountInfo>
      </div>
      <BottomPanel rootClassName="bottom-panel-root-class-name7"></BottomPanel>
      {(() => {
        if (popup)
          return <LogoutPopup closePopup={() => setPopup(false)}></LogoutPopup>;
      })()}
    </div>
  )
}

export default PersonalAccount
