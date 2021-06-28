import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Projects() {
  useEffect(() => {
   Aos.init({
     once:true,
     easing:'ease-out'
   });
  }, [])
    return (
        <div className="projects" id="projects">
         <div className="container">
          <div className="projects-wrapper">

        <h1 id="white" className="main-h1"
        data-aos="fade-up"  data-aos-duration="400" ><span id="third">02.</span>Some Of My Projects</h1>

      <div className="featured-wrapper0" data-aos="fade-up"  data-aos-duration="400"> 
          <div className="featured0">
            <h1>MERN Task-Tracker App</h1>
            <p>This is a MERN stack  app where you can add add and delete task.You can also change reminder by double clicking the task.</p>
            <ul>
              <li>MongoDB</li>
              <li>Express</li>
              <li>React</li>
              <li>Node</li>
            </ul>
            <div className="clickable-link0">
              <a href="https://github.com/Ajya007/Task-Tracker-Api" target="_blank" rel="noreferrer"><i className="fa fa-github "></i></a>
             {/*eslint-disable */}
              <a href="https://mern-task-trackerr.netlify.app/" target="_blank" rel="noreferrer" className='external-link0'><i className="fa fa-link " aria-hidden="true"></i></a>
             {/*eslint-enable */}
            </div>

          </div>
          </div>

          <div className="featured-wrapper1" data-aos="fade-up"  data-aos-duration="400">
          <div className="featured1">
            <h1>Breaking Bad App</h1>
            <p>This is a react Breaking Bad app where you can see all the character and detail of the character from Breaking Bad series.All the data are fetched for free Breakingbad Api.You can also search for the character by name in searchbox.</p>
            <ul>
              <li>Html</li>
              <li>Css</li>
              <li>Javascript</li>
              <li>React</li>
            
            </ul>
            <div className="clickable-link1">
            <a href="https://github.com/Ajya007/React-Breakin-Bad-Api" target="_blank" rel="noreferrer"><i className="fa fa-github "></i></a>
               {/*eslint-disable */}
              <a href="https://stupefied-jackson-7a6412.netlify.app/" target="_blank" rel="noreferrer" className='external-link1'><i className="fa fa-link " aria-hidden="true"></i></a>
             {/*eslint-enable */}
            </div>

          </div>
          </div>


        
      <div className="featured-wrapper" data-aos="fade-up"  data-aos-duration="400"> 
          <div className="featured">
            <h1>Budget App</h1>
            <p>This is a react budget app where you can add your income and expense.It will track both of your income and expense and gives you the total budget you have left.It also shows your transaction histoy where you can delete your transaction if its a mistake.All the data are stored in localstorage so  you you can edit and remove data anytime you want from you device.</p>
            <ul>
              <li>Html</li>
              <li>Css</li>
              <li>Javascript</li>
              <li>React</li>
            </ul>
            <div className="clickable-link">
              <a href="https://github.com/Ajya007/React-Expense-Tracker" target="_blank" rel="noreferrer"><i className="fa fa-github "></i></a>
             {/*eslint-disable */}
              <a href="https://react-budgettrackerr.netlify.app/" target="_blank" rel="noreferrer" className='external-link'><i className="fa fa-link " aria-hidden="true"></i></a>
             {/*eslint-enable */}
            </div>

          </div>
          </div>


     
        <div className="box">
        <section 
   data-aos="fade-up" 
   data-aos-duration="600"
   data-aso-delay="50"


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
        </section>

        <section
       data-aos="fade-up" 
       data-aos-duration="700"
       data-aso-delay="60"
      
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
      </section>

        <section 
        data-aos="fade-up" 
        data-aos-duration="800"
        data-aso-delay="70"
       
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
        </section>


        <section
         data-aos="fade-up" 
         data-aos-duration="600"
         data-aso-delay="50"
      >
       <div className="top">
          <i className="fa fa-folder-open-o fa-2x" aria-hidden="true"  style={{color:'rgb(226, 67, 75)'}}></i>
          
          <div id="top-links">
          <a href="https://github.com/Ajya007/React-API-Image-Gallery" target="_blank" rel="noreferrer"><i className="fa fa-github fa-2x"></i></a>
           {/*eslint-disable */}
           <a href="https://react-firegraam-imagegallery.netlify.app/" target="_blank" rel="noreferrer"><i className="fa fa-link fa-2x" aria-hidden="true"></i></a>
          {/*eslint-enable */}
         
        </div>
        </div>
        <h1>React Image-Gallery</h1>
        <p> This is a Image-gallery app where you and add images  and save it to the firebase server and render it to your app</p>
        <p>You can also delete the images which will also be removed from the server</p>
      
           
         </section>

        <section
     data-aos="fade-up" 
     data-aos-duration="700"
     data-aso-delay="60"
  
         >
          <div className="top">
        
        </div>
        <h1>Coming Soon....</h1>
       
      </section>
       
   
        <section
         data-aos="fade-up" 
         data-aos-duration="800"
         data-aso-delay="70"
      ><h1>For More Projects Visit My Github Page</h1>
          <p>
          <a href="https://github.com/Ajya007" target="_blank" id="third" rel="noreferrer">Click Here</a></p>
          </section>
        

      </div>

      </div>
      </div>
      </div>
    )
        
}

export default Projects
