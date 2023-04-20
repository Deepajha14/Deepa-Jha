import React, {useState} from 'react'
import './ContactFormStyle.css'
import cartoon from '../images/cartoon.png'

export default function ContactForm() {
  const handleOnChange = (e) => {
    setText(e.target.value);
}
const [text, setText] = useState("");
  return (
    <div className='contact-window'>
      <h1>Let's Get in Touch.</h1>
      <p>Discuss a project or just want to say Hi? My inbox is open for all.</p>
      <div className="contact-container">
        <div className="contact-wrapper-left">
          <img src={cartoon} alt='Deepa Jha'></img>
        </div>
        <div className="contact-wrapper-right">
          <form action="mailto:deepadj1415@gmail.com" method='post' encType='text/plain'>
            <input id='name' type='text' name='Name' placeholder='Full Name' onChange = {handleOnChange}></input>
            <input id='email' type='email' name='Email' placeholder='Email ID' onChange = {handleOnChange}></input>
            <textarea id='message' name='Message' rows='5' column='15' placeholder='Drop your message here.' onChange = {handleOnChange}>{text}</textarea>
            <button className='btn' id='submitBtn' type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}
