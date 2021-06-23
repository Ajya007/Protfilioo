import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import emailjs from 'emailjs-com'

function Contact() {
  useEffect(() => {
    Aos.init({
      once:true,
      easing:'ease-out'
    });
   }, [])


          function sendEmail(e){
            e.preventDefault();

            emailjs.sendForm('service_dw1dr5t', 'template_vkfot0m', e.target, 'user_OqqVTdQPde7bJWfCe5mpe')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
              e.target.reset();
          }
    
    return (
        
        <div className="contacts" id="contact">
         <div className="container">
             <div className="dark"
              data-aos="fade-in"  data-aos-duration="1000" data-aos-delay="400"> 

          <h1 id="white">Get in touch</h1>
            <span id="line"></span>
                <p>Have a sweet project in mind or just want to say hi? </p>
                <p>Feel free to send me a message!</p>
            <form className="contact-form" onSubmit={sendEmail}>
                     <input  type="text" placeholder="Name" name="from_name" />
                     <input type="email" placeholder="Email Address" name="from_email" />
                     <textarea placeholder="Message" name="message" />
                     <button type="submit" value="submit" className="btn">Send Message</button>
            </form>
        
     
     
      </div>
       </div>
        </div>

    )
}

export default Contact
