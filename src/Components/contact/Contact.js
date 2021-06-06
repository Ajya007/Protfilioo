
import {useInView} from 'react-intersection-observer'
import {useEffect, useState} from 'react'
import { useAnimation } from 'framer-motion';
import {motion} from 'framer-motion'
import emailjs from 'emailjs-com'

function Contact() {
    const {ref,inView}=useInView({
        threshold:0.5
      });
      const animation4= useAnimation();
      const [showAnimation,setShowAnimation] = useState(false);




      useEffect(() => {

     
        if(!showAnimation){
          animation4.start({
            y:50,
            opacity:0
          });
        }

          if(inView){
            setShowAnimation(true)
  
          }

            
           }, [inView])
           if(showAnimation){
            animation4.start({
              y:0,
              opacity:1,
              transition:{ease:"easeOut",duration:1,delay:0.4}
            });
          }


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
             <motion.div className="dark"
             animate={animation4} >

          <h1 id="white" ref={ref}>Get in touch</h1>
            <span id="line"></span>
                <p>Have a sweet project in mind or just want to say hi? </p>
                <p>Feel free to send me a message!</p>
            <form className="contact-form" onSubmit={sendEmail}>
                     <input  type="text" placeholder="Name" name="from_name" />
                     <input type="email" placeholder="Email Address" name="from_email" />
                     <textarea placeholder="Message" name="message" />
                     <button type="submit" value="submit" className="btn">Send Message</button>
            </form>
        
     
     
      </motion.div>
       </div>
        </div>

    )
}

export default Contact
