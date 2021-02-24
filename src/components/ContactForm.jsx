import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import contact from '../assets/svg/howWeWork.svg'
import Button from './Button';

export const ContactForm = () => {

    const [ isValid, setIsValid ] = useState(false);



    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_3c9s50c', 'template_hgajgim', e.target, 'user_DmbAN19hktem5zuMTXWTj')
          .then((result) => {
              console.log(result.text);
              setIsValid(true)
              return isValid ? alert("თქვენი წერილი გაიგზავნა წარმატებით!") : null
          }, (error) => {
              console.log(error.text);
              setIsValid(false)
              return isValid ? alert("თქვენი წერილი ვერ გაიგზავნა :( სცადეთ ტელ. ნორმით ან მაილზით დაკავშირება.") : null
          });
          e.target.reset();
    }

    return (
        <div id="contact-form" className="contact-form fullScreen">
           <div className="grid-ish">
                <div className="sec-illustration">
                    <img src={contact} alt='illustration'></img>
                </div>
                <div className='contact-side'>
                    <form className="contact-form" onSubmit={sendEmail}>
                        <input 
                        className="form-name form-style" 
                        type="text" 
                        placeholder="სახელი" 
                        name="from_name" 
                        />
                        <input 
                        className="form-email form-style" 
                        type="email" 
                        placeholder="მაილი" 
                        name="from_email" 
                        />
                        <input 
                        className="form-number form-style" 
                        type="number" 
                        placeholder="ტელ:" 
                        name="phone_num" 
                        />
                        <textarea 
                        className="form-textArea form-style" 
                        placeholder="წერილი" 
                        name="message" />
                        <Button
                            text="გაგზავნა"
                            wdth="220px"
                            hght="50px"
                            fontsize="18px"
                            type="submit"
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}
