import React from 'react'
import howdowework from '../assets/svg/howWeWork.svg'

export const HowItWorks = () => {
    return (
        <div id="about-work" className="about fullScreen">
           <div className="grid-ish">
            <div className='about-content'>
              <span>
                <h1 style={{paddingBottom: '20px'}}>როგორ <span style={{color: '#F97C63'}}>ვმუშაობთ</span></h1>
                <p><b>პროექტებზე მუშაობის თანამედროვე მიდგომები</b><br /> 
                პროექტების შესრულებისას ვიყენებთ თანამედროვე <br />
                რადგან მაქსიმალურად მოვარგოთ დღევანდელ <br />
                სტანდარტებს <br /><br />
                <b>პერსონალური სამუშაო გეგმა </b> <br /> 
                დამკვეთის კმაყოფილებისთვის მისი სურვილები <br /> 
                მაქსიმალურადაა გათვალისწინებული და მუშავდება <br />
                ინდივიდუალური გეგმა <br /><br />
                <b>პასუხისმგებლობა</b> <br /> 
                ხარისხთან ერთად აუცილებელია დამკვეთს მიეწოდოს <br /> შესრულებული პროექტი დათქმულ ვადებში</p>
              </span>
            </div>
            <div className="sec-illustration third">
              <img src={howdowework} alt='illustration'></img>
            </div>
          </div>
        </div>
    )
}
