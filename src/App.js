import {useState,useEffect} from 'react'
import Header from './Components/header/Header.js'
import './App.css';
import Showcase from './Components/showcase/Showcase.js'
import About from './Components/about/About.js'
import Projects from './Components/projects/Projects.js'
import Contact from './Components/contact/Contact.js'
import Footer from './Components/footer/Footer.js'
import Icons from './Components/icons/Icons.js'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";


function App() {
  const [loading,setLoading]=useState(false)
  useEffect(() => {
    setLoading(true);
    setTimeout(() =>{
      setLoading(false)
    },2000)
  }, [])

  return (
    <div>
     {loading ? (<div className="hashitem"> <ClimbingBoxLoader color={'#e2434b'} loading={loading}  size={40}  /></div>) : (<div className="main">
      
      <Header />
      <Showcase />
    
      <Icons />
      <About />
      <Projects />
      <Contact />

      <Footer />
    
 
    </div>)
}
    
 

    </div>
  );
}

export default App;
