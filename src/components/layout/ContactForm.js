import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import Message from "../messages/Message";
import validator from 'validator';

export default function ContactForm(){

  const form = useRef();
  const [message, setMessage] = useState('');
  const [type, setType] = useState();
  const [emailValidate, setEmailValidate] = useState(false);
  
  const [emailError, setEmailError] = useState('');
  const validateEmail = (event) =>{
    let email = event.target.value;

    if(validator.isEmail(email)){
      setEmailError('This email is valid!')
      setEmailValidate(true);
    }else{
      setEmailError('Please enter a valid email.');
      setEmailValidate(false);
    }
  }

  function emailSender(event){
    event.preventDefault();
    setMessage('')

    const email = document.getElementById('input_email')
    if(!email && emailValidate === false){
      setMessage('You need to provide a valid email.');
      setType('error');
    }

    emailjs.sendForm('service_e1kytso', 'template_0sx7l2l', form.current, '0AXA4E2MwAxcxCNWY')
    .then((result) => {
        if(result.text === "OK" && emailValidate === true){
          setMessage('Your message has been send.');
          setType('success');
        } else {
          setMessage('Something went wrong, please try again later.');
          setType('error');
        }
      }, (err) => {
        console.log(err.text)
      });
  }

  return(
    <form ref={form} onSubmit={emailSender} className="flex flex-col gap-3 h-auto">
      {message && ( <Message text={message} type={type} /> )}
      <div className="flex flex-col gap-2">
        <label htmlFor="input_name">Enter your name</label>
        <input required className="w-full text-primary-black rounded-md p-2 ml-3" name="input_name" id="input_name" placeholder="Enter your name" />
      </div>
      <div>
        <label htmlFor="input_email">Enter your email</label>
        <input required className="w-full text-primary-black rounded-md p-2 ml-3" name="input_email" id="input_email" placeholder="your@email.com" onChange={(e) => validateEmail(e)} />
        <span className="text-sm ml-5">{emailError}</span>
      </div>
      <div className="flex flex-col">
        <label htmlFor="input_message">Enter your message</label>
        <textarea required className="rounded-md text-primary-black p-2 ml-3" name="input_message" id="input_message" rows={10} cols={60} defaultValue="Hello Daniel. I'm ...">
        </textarea>
      </div>
      <div className="flex items-center justify-center">
        <input className="cursor-pointer button-style bg-primary-black hover:bg-primary-black/60 mt-3" type="submit" value="Send message" />
      </div>
    </form>
  );
}