import {motion} from 'framer-motion'

function Icons() {
    return (

        <>
        <motion.div className="icons"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:1.2,ease: "easeOut",duration:2}}
        >

        <ul className="icons-ul">
          
          <li>
        <div id="icon"><a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fa fa-twitter fa-1.5x"></i></a></div>
          </li>

          <li>
         <div id="icon"><a href="https://facebook.com/" target="_blank" rel="noreferrer"><i className="fa fa-facebook fa-1.5x" style={{marginBottom:'5px'}}></i></a></div>
          </li>
          
          <li>
         <div id="icon"><a href="https://instagram.com/" target="_blank" rel="noreferrer"><i className="fa fa-instagram fa-1.5x"></i></a></div>
          </li>
          
          <li>
            <div id="icon"><a href="https://github.com/Ajya007" target="_blank" rel="noreferrer"><i className="fa fa-github fa-1.5x"></i></a></div>
          </li>
          
          <span className="line"></span>
        </ul>
      </motion.div>


      <motion.div className="email"
       initial={{opacity:0}}
       animate={{opacity:1}}
       transition={{delay:1.2,ease: "easeOut",duration:2}}
      >
        <a href="https://gmail.com/">ajaygubhaju223@gmail.com</a>
        <span id="line"></span>
      </motion.div>

      </>
    )
}

export default Icons
