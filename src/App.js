import Header from './Components/header/Header.js'
import './App.css';
import Showcase from './Components/showcase/Showcase.js'
import About from './Components/about/About.js'
import Projects from './Components/projects/Projects.js'
import Contact from './Components/contact/Contact.js'
import Footer from './Components/footer/Footer.js'
import Icons from './Components/icons/Icons.js'


function App() {

  return (
    <div className="main">
      
      <Icons />
      <Header />
      <Showcase />
    
      <About />
      <Projects />
      <Contact />

      <Footer />
    
 
    </div>
  );
}

export default App;
