import React from 'react'
import aboutillustrationOne from '../assets/svg/about/aboutillustration.svg'

export const About = () => {
    return (
        <div id="about" className="about fullScreen">
          <div className="grid-ish">
              <div className="sec-illustration">
                <img src={aboutillustrationOne} alt='illustration'></img>
              </div>
              <div className='about-content'>
              <span>
                <h1 style={{paddingBottom: '20px'}}>ჩვენს <span style={{color: '#F97C63'}}>შესახებ</span></h1>
                <p>ჩვენ ვართ გამოცდილი
                  პროგრამისტებისა და დიზაინერების <br /> 
                  გუნდი, რომელიც აქტიურად მუშაობს სხვადასხვა პროგრამულ <br /> 
                  უზრუნველყოფაზე, როგორებიცაა: ვები, დიზაინი, დესკტოპ და <br /> 
                  ასევე მობილური აპლიკაციები. <br /> <br /> 
                  ჩვენი გუნდის თითოეული წევრი პერსონალურად მუშაობს <br /> 
                  თქვენს შეკვეთაზე, რადგან თქვენი კმაყოფილება, საიტის <br /> 
                  უსაფრთხოება და ხარისხი ჩვენს პრიორიტეტს წარმოადგენს.</p> 
                </span>
              </div>
          </div>
        </div>
    )
}
