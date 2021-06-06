
import {useInView} from 'react-intersection-observer'
import {useEffect, useState} from 'react'
import { useAnimation } from 'framer-motion';
import {motion} from 'framer-motion'

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
    
    return (
        
        <div className="contacts" id="contact">
         <div className="container">
             <motion.div className="dark"
             animate={animation4} >

          <h1 id="white" ref={ref}>Get in touch</h1>
            <span id="line"></span>
                <p>Have a sweet project in mind or just want to say hi? </p>
                <p>Feel free to send me a message!</p>
            <form className="contact-form">
                     <input type="text" type="name" placeholder="Name" />
                     <input type="text" type="email" placeholder="Email Address" />
                     <textarea placeholder="Message" />
                     <button type="submit" value="submit" className="btn">Send Message</button>
            </form>
        
     
     
      </motion.div>
       </div>
        </div>

    )
}

export default Contact
