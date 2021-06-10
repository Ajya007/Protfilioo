
import {useInView} from 'react-intersection-observer'
import {useEffect, useState} from 'react'
import { useAnimation } from 'framer-motion';
import {motion} from 'framer-motion'

function About() {

  const {ref,inView}=useInView({
    threshold:0.5
  });
  const animation = useAnimation();
  const [showAnimation,setShowAnimation] = useState(false);


  if(!showAnimation){
    animation.start({
      y:50,
      opacity:0
    });
  }


  useEffect(() => {

  
   

      if(inView){
        setShowAnimation(true)
 
      }
   
        
       }, [inView])

       if(showAnimation){
        animation.start({
          y:0,
          opacity:1,
          transition:{ease:"easeOut",duration:1}
        });
      }


     
    return (
        <div className="about" id="about">
         <div className="container">
          <div className="about-wrapper" ref={ref}>
         
          <motion.section 
            animate={animation}
            >
          
            <h1 id="white"><span id="third">01.</span> About Me</h1>

            <p>Hello! I'm Ajay, a Front-End Developer based in Kathmandu,Nepal.</p>
            <p>I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to
              always build products that provide pixel-perfect, performant
              experiences.</p>
            <p>After completing bachelor on Bsc.csit. I  decided to work as a programmer where I can work on a wide variety
              of interesting and meaningful projects on a daily basis.</p>
            <p>Here are a few technologies I've been working with recently:</p>
            
         <div className="ul-section">
            <ul>
              <div>
                <li>Html</li>
                <li>S(Css)</li>
                <li>Javascript</li>
              </div>
              <div>
               <li>React</li>
                <li>Git</li>
              </div>
            </ul>
          </div>
          </motion.section>
          
          <motion.section
          animate={animation}
          >
            <img src="https://lh3.googleusercontent.com/pw/ACtC-3eCtOGoUZNhcOKKd3ND-zH30gORu3rL28Ae8vx5_JrvqMEIKwHap9HPTdWEStsayVjAFWkH5FvznQ1qgXh1CkcA8G_NuK4Q7MQeADDLYvNZOPB125Fun8aDGdSga2_toh0_ZAwNh9_CwU-Bam22SNYt=s350-no?authuser=0" alt="profile" />
          </motion.section>


        </div>
         </div>
          </div>

            
 
    )
}

export default About
 