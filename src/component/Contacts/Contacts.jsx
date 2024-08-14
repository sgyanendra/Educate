import React from 'react'
import './Contacts.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contacts = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "73874507-707d-46ed-b6e7-eed3962707d8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
       <div className='contact-col'>
        <h3>Send us a message <img src={msg_icon} alt=""/></h3>
         <p>A message can be a communication in writing, speech, or by signals. It can be sent through various platforms, such as Google Messages, iMessage, or Messenger, to convey information, thoughts, or ideas to others. In a broader sense,a message can be a noun or a verb. As a noun, it refers to the content being conveyed
         </p>
         <ul>
            <li><img src={mail_icon} alt=""/>Contact@GreatStack.dev</li>
            <li><img src={phone_icon} alt=""/>+1 123-344-2345</li>
            <li><img src={location_icon} alt=""/>77 Massaasjj Ave, cambridge</li>
         </ul>
       </div>
       <div className='contact-col'>
         <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type='text' name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter your mobile number' required/>
            <label>Write your messages here</label>
            <textarea name='message' rows='6' placeholder='enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now<img src={white_arrow} alt=""/></button>
          </form>
          <span>{result}</span>
       </div>
    </div>
  )
}


export default Contacts
