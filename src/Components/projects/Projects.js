import {useInView} from 'react-intersection-observer'
import {useEffect, useState} from 'react'
import { useAnimation } from 'framer-motion';
import {motion} from 'framer-motion'

function Projects() {

  const {ref,inView}=useInView({
    threshold:0.5
  });

  const [showAnimation,setShowAnimation] = useState(false);
  const animation0 = useAnimation();
  const animation1 = useAnimation();
  const animation2 = useAnimation();
  const animation3= useAnimation();

  if(!showAnimation){
    animation0.start({
      opacity:0
    });
    animation1.start({
      y:30,
      opacity:0
       });
       animation2.start({
        y:30,
        opacity:0
         });
         animation3.start({
          y:30,
          opacity:0
           });
  }


  useEffect(() => {
         if(inView){
        setShowAnimation(true)
      }
 
       }, [inView])

       
       if(showAnimation){
        animation0.start({
          opacity:1,
          transition:{ease:"easeOut",duration:1}
        });
        animation1.start({
          y:0,
          opacity:1,
          transition:{ease:"easeOut",delay:0.2},
        });
        animation2.start({
          y:0,
          opacity:1,
          transition:{ease:"easeOut",delay:0.3}
        });
        animation3.start({
          y:0,
          opacity:1,
          transition:{ease:"easeOut",delay:0.4}
        });
      }



    return (
        <div className="projects" id="projects">
         <div className="container">
          <div className="projects-wrapper">

        <motion.h1 id="white" className="main-h1" ref={ref}
          animate={animation0}><span id="third">02.</span>Some Of My Projects</motion.h1>
     
        <div className="box">
        <motion.section
        animate={animation1}
        whileHover={{ y:-8}}
         >
          <div className="top">
          <i className="fa fa-folder-open-o fa-2x" aria-hidden="true" style={{color:'rgb(226, 67, 75)'}}></i>
          <div id="top-links">
          <a href="https://github.com/Ajya007/Frontend-Ninjaa" target="_blank" rel="noreferrer"><i className="fa fa-github fa-2x"></i></a>
          
           {/*eslint-disable */}
          <a href="https://ajya007.github.io/Frontend-Ninjaa/" target="_blank" rel="noreferrer"><i className="fa fa-link fa-2x" aria-hidden="true"></i></a>
           {/*eslint-enable */}
        </div>
        </div>
           <h1 id="white">FrontEnd Ninja</h1>
           <p>This is a simple static website.To visit click the link above</p>
              <ul>
               <li>HTML</li>
               <li>S(CSS)</li>
               <li>Javascript</li>
               </ul>
        </motion.section>

        <motion.section
        animate={animation2}
        whileHover={{ y:-8}}
        >
          <div className="top">
          <i className="fa fa-folder-open-o fa-2x" aria-hidden="true"  style={{color:'rgb(226, 67, 75)'}}></i>
          <div id="top-links">
          <a href="https://github.com/Ajya007/Coffee" target="_blank" rel="noreferrer"><i className="fa fa-github fa-2x"></i></a>
           {/*eslint-disable */}
          <a href="https://ajya007.github.io/Coffee/" target="_blank" rel="noreferrer"><i className="fa fa-link fa-2x" aria-hidden="true"></i></a>
           {/*eslint-enable */}
        </div>
        </div>
        <h1>Coffee Shop Website</h1>
        <p> This is a simple static website.To visit click the link above</p>
        <ul>
          <li>HTML</li>
          <li>S(CSS)</li>
          <li>Javascript</li>
          <li>Aos</li>
        </ul>
      </motion.section>

        <motion.section 
        animate={animation3}
        whileHover={{ y:-8}}
        >
          <div className="top">
          <i className="fa fa-folder-open-o fa-2x"  style={{color:'rgb(226, 67, 75)'}} aria-hidden="true"></i>
          <div id="top-links">
          <a href="https://github.com/Ajya007/Medical-Website" target="_blank" rel="noreferrer"><i className="fa fa-github fa-2x"></i></a>
          {/*eslint-disable */}
          <a href="https://ajya007.github.io/Medical-Website/#about" target="_blank" rel="noreferrer"><i className="fa fa-link fa-2x" aria-hidden="true"></i></a>
          {/*eslint-enable */}
          </div>
          </div>
            <h1>Medical Website</h1>
            <p> This is a simple static  medical website.To visit click the link above</p>
              <ul>
               <li>HTML</li>
                <li>S(CSS)</li>
                 <li>Javascript</li>
                 </ul>
        </motion.section>

        <motion.section
         animate={animation1}
         whileHover={{ y:-8}}
         >
          <div className="top">
          <i className="fa fa-folder-open-o fa-2x" aria-hidden="true"  style={{color:'rgb(226, 67, 75)'}}></i>
          <div id="top-links">
          <a href="https://github.com/Ajya007/React-Task-Tracker" target="_blank" rel="noreferrer"><i className="fa fa-github fa-2x"></i></a>
     
        </div>
        </div>
        <h1>React Task-Tracker</h1>
        <p> This is a task tracker app where you and add remove and edit the task on local server api</p>
        <p>To run it first download the file from github</p>
        <p>Use <span id='third'>npm run server</span> to run the api server  and then <span id='third'>npm start </span> to run the application</p>
      </motion.section>
       
        <motion.section
         animate={animation2}
         whileHover={{ y:-8}}>
       <div className="top">
          <i className="fa fa-folder-open-o fa-2x" aria-hidden="true"  style={{color:'rgb(226, 67, 75)'}}></i>
          <div id="top-links">
          <a href="https://github.com/Ajya007/React-API-Image-Gallery" target="_blank" rel="noreferrer"><i className="fa fa-github fa-2x"></i></a>
         
        </div>
        </div>
        <h1>React Image-Gallery</h1>
        <p> This is a Image-gallery app where you and add images  and save it to the firebase server and render it to your app</p>
        <p>You can also delete the images which will also be removed from the server</p>
      
           
         </motion.section>
        <motion.section
         animate={animation3}
         whileHover={{ y:-8}}
        ><h1>For More Projects Visit My Github Page</h1>
          <p>
          <a href="https://github.com/Ajya007" target="_blank" id="third" rel="noreferrer">Click Here</a></p>
          </motion.section>
        

      </div>

      </div>
      </div>
      </div>
    )
        
}

export default Projects
