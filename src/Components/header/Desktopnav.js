
import {motion} from 'framer-motion'
import {Link as Scroll} from 'react-scroll'



function Desktopnav() {
    return (
        <div className="desktop-header">
        <ul className="desktop-nav">
          
<motion.li className="desktop-nav-links"
initial={{y:-20,opacity:0}}
animate={{y:0,opacity:1}}
transition={{ease: "easeOut"}}
>
<Scroll to="about" smooth={true} duration={1000} offset={-80}> <span id="third">01. </span>About</Scroll></motion.li>
<motion.li className="desktop-nav-links"
initial={{y:-20,opacity:0}}
animate={{y:0,opacity:1}}
transition={{delay:0.1,ease:"easeOut"}}
>
<Scroll to="projects"  smooth={true} duration={600} offset={-80}> <span id="third">02. </span>Projects</Scroll>
</motion.li>
<motion.li className="desktop-nav-links"
initial={{y:-20,opacity:0}}
animate={{y:0,opacity:1}}
transition={{delay:0.2,ease:"easeOut"}}
>
<Scroll to="contact"   smooth={true} duration={1000} offset={-80}><span id="third">03. </span>Contact</Scroll>
</motion.li>
<motion.li className="desktop-nav-links"

initial={{y:-20,opacity:0}}
animate={{y:0,opacity:1}}
transition={{delay:0.3,ease:"easeOut"}}
><a href="https://docs.google.com/document/d/1f2ZF2OphxByRxYa2XN-n_uSNeWPbec7j-a9xJ36XfP4/edit?usp=sharing" target="_blank" rel="noreferrer"><button className="btn">Resume</button></a></motion.li>

        </ul>
     </div>

    )
}

export default Desktopnav
