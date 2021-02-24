import React from 'react'
import Button from './Button'
import { Navbar } from './Navbar'
import illustrationOne from '../assets/svg/Header/illustration.svg'

export const Home = () => {
  return (
    <div id="home" className="home fullScreen">
      <div className="nav-container">
        <header id="nav-menu">
          <Navbar title='NEKODEV' />
        </header>
      </div>
      <div className="main-content">
        <div className="in-content">
          <div className="first-illustration">
            <img src={illustrationOne} alt='illustration'></img>
          </div>
          <h1>ჩვენ ვართ NEKODEV,
                  <br /> ვებ გვერდების, მობილური <br />
                  აპლიკაციების და პროგრამული <br />
                  უზრუნველყოფის შემქნელი <br />
                  კომპანია
                </h1>
          <p>ჩვენ ვქმნით თანამედროვე პროგრამულ უზრუნვეყოფას</p>
          <Button
            text="შეგვეხმიანეთ"
            wdth="220px"
            hght="50px"
            fontsize="18px"
            onClick={() => {
              window.location.replace("/#contact-form")
            }}
          />
        </div>
      </div>
    </div>
  )
}
