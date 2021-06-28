import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import image from '../../img/profile.jpg'

function About() {

    useEffect(() => {
      Aos.init({
        once:true,
        easing:'ease-out'
      });
     }, [])


     
    return (
        <div className="about" id="about">
         <div className="container">
          <div className="about-wrapper">
         
          <section 
            data-aos="fade-up"  data-aos-duration="600"
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
          </section>
          
          <section

data-aos="fade-up"  data-aos-duration="1000"
          >
            <img src={image} alt="profile" />
          </section>


        </div>
         </div>
          </div>

            
 
    )
}

export default About