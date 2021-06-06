import {Link as Scroll} from 'react-scroll'
import {motion} from 'framer-motion'
function Mobilenav({setShowMenu,showMenu}) {

const clickHandler = () => {
  setShowMenu(!showMenu)
}
    return (
        <>
             <motion.nav
             layout
             initial={{x:600}}
             animate={{x:0}}
             transition={{delay:0.1,ease:"easeOut"}}>
                <ul className="menu-nav">
                  <motion.li className="nav-links" 
                   initial={{x:200}}
                   animate={{x:0}}
                   transition={{delay:0.2,ease:"easeOut"}}><Scroll to= 'about' onClick={clickHandler}   smooth={true} duration={600} offset={-80} ><span id="third">01. </span>About</Scroll></motion.li>
                  <motion.li className="nav-links"
                   initial={{x:200}}
                   animate={{x:0}}
                   transition={{delay:0.3,ease:"easeOut"}}
                   ><Scroll to='projects'  onClick={clickHandler}   smooth={true} duration={600} offset={-80}><span id="third">02. </span>Projects</Scroll></motion.li>
                  <motion.li className="nav-links"
                   initial={{x:200}}
                   animate={{x:0}}
                   transition={{delay:0.4,ease:"easeOut"}}
                   ><Scroll to='contact'  onClick={clickHandler}  smooth={true} duration={600} offset={-80}><span id="third">03. </span>Contact</Scroll></motion.li>
                  <motion.li className="nav-links" onClick={clickHandler}
                   initial={{x:200}}
                   animate={{x:0}}
                   transition={{delay:0.5,ease:"easeOut"}}
                   ><button className="btn"><a href="https://drive.google.com/file/d/1kCutOV5aP3ciAzoE-Mh6I-tNCodqicwV/view?usp=sharing" target="_blank">Resume</a></button></motion.li>
              
                </ul>
              </motion.nav>
            
        </>
    )
}

export default Mobilenav
