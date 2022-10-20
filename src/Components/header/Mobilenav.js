import {Link as Scroll} from 'react-scroll'
import {motion} from 'framer-motion'
function Mobilenav({setShowMenu,showMenu}) {

const clickHandler = () => {
  setShowMenu(!showMenu)
}
    return (
        <>
             <motion.nav
             initial={{x:900}}
             animate={{x:0}}
             transition={{delay:0.1,ease:"easeOut",duration:0.1}}
           >

                <motion.ul className="menu-nav"
                     initial={{x:600}}
                     animate={{x:0}}
                     transition={{delay:0.1,ease:"easeOut",duration:0.7}}>

                  <motion.li className="nav-links" 
                   initial={{x:600}}
                   animate={{x:0}}
                   transition={{delay:0.2,ease:"easeOut",duration:0.8}}>
                   <Scroll to= 'about' onClick={clickHandler}   smooth={true} duration={600} offset={-80} ><span id="third">01. </span>About</Scroll>
                   </motion.li>

                  <motion.li className="nav-links"
                   initial={{x:600}}
                   animate={{x:0}}
                   transition={{delay:0.3,ease:"easeOut",duration:0.8}}>
                  <Scroll to='projects'  onClick={clickHandler}   smooth={true} duration={600} offset={-80}><span id="third">02. </span>Projects</Scroll>
                  </motion.li>
                  <motion.li className="nav-links"
                   initial={{x:600}}
                   animate={{x:0}}
                   transition={{delay:0.4,ease:"easeOut",duration:0.9}}
                   ><Scroll to='contact'  onClick={clickHandler}  smooth={true} duration={600} offset={-80}><span id="third">03. </span>Contact</Scroll></motion.li>
                  <motion.li className="nav-links" onClick={clickHandler}
                   initial={{x:600}}
                   animate={{x:0}}
                   transition={{delay:0.5,ease:"easeOut",duration:1}}
                   ><button className="btn"><a href="https://docs.google.com/document/d/1galsRYGMoUSIWUklUhMSCXHoJbkIhYcM-jukfkixoEQ/edit?usp=sharing" target="_blank" rel="noreferrer">Resume</a></button></motion.li>
              
                </motion.ul>
              </motion.nav>
            
        </>
    )
}

export default Mobilenav
