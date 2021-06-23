import {useState,useEffect} from 'react'
import Mobilenav from './Mobilenav.js'
import Desktopnav from './Desktopnav.js'
import {motion} from 'framer-motion'
import {animateScroll as scroll} from "react-scroll"


const Header = () =>  {
  const [showMenu,setShowMenu]=useState(false);
  const [scrollnav,setScrollNav]=useState(false);

  const changeNav = () => {
    if(window.scrollY>=80){
      setScrollNav(true)
    }
    else{
    setScrollNav(false)
  }
}

useEffect(() => {
  window.addEventListener('scroll',changeNav)
  
  return () =>{
    window.removeEventListener('scroll',changeNav)
  }

}, [])



  const clickHandler = () =>{
    setShowMenu(!showMenu)
  }

  const togglehome = () =>{ scroll.scrollToTop()}
    return (
        <div className="header-container">
            <div className="header-wrapper">
            { showMenu && <Mobilenav showMenu={showMenu} setShowMenu={setShowMenu}/>}
            
        
                <header  style={{backgroundColor:scrollnav ? '#3a2634' : '',position:scrollnav ? 'fixed' : 'absolute'}}>
                    <motion.h1
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{delay:0.1,ease:"easeIn"}}
                    onClick={togglehome}>
                      @jy@</motion.h1>
                    <Desktopnav />
                  
                    
         <div className={`menu-btn ${showMenu ? 'close' : ''}`} onClick={clickHandler}>
           <div className="btn-line 1"></div>
           <div className="btn-line 2"></div>
           <div className="btn-line 3"></div>
        </div>

                </header>
        
              

            </div>
        </div>
    )
}

export default Header
