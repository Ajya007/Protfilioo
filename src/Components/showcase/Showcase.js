
import {motion} from 'framer-motion'
import {Link as Scroll} from 'react-scroll'
function Showcase() {
    return (
        <div className="showcase">

            <div className="container">
            <div className="showcase-wrapper">
                
                <motion.h3
                initial={{y:10,opacity:0}}
                animate={{y:0,opacity:1}}
                transition={{delay:0.6,ase: "easeOut"}}
                ><span id="third">Hi, my name is</span></motion.h3>

                <motion.h1 id="white"
                  initial={{y:30,opacity:0}}
                  animate={{y:0,opacity:1}}
                  transition={{delay:0.7,ease: "easeOut"}}
                  >AJAY GUBHAJU.</motion.h1>

                <motion.h1
                  initial={{y:30,opacity:0}}
                  animate={{y:0,opacity:1}}
                  transition={{delay:0.8,ease: "easeOut"}}
                >I BUILT THINGS FOR WEB.</motion.h1>
                <motion.p
                  initial={{y:30,opacity:0}}
                  animate={{y:0,opacity:1}}
                  transition={{delay:0.9,ease: "easeOut"}}
                >I'm a Front-End Developer based in Kathmandu,Nepal specializing in
            building (and occasionally designing) exceptional websites,
            applications, and everything in between.</motion.p>
          <motion.button className="btn"
            initial={{y:10,opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{delay:0.96, ease: "easeOut"}}
            >
              <Scroll to='contact' smooth={true} duration={600} offset={-80}>
              Get in touch
              </Scroll>
              </motion.button>


    
  
        
        </div>
        </div>
            
        </div>
    )
}

export default Showcase
