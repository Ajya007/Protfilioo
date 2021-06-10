import {useState,useEffect} from 'react'
import Header from './Components/header/Header.js'
import './App.css';
import Showcase from './Components/showcase/Showcase.js'
import About from './Components/about/About.js'
import Projects from './Components/projects/Projects.js'
import Contact from './Components/contact/Contact.js'
import Footer from './Components/footer/Footer.js'
import Icons from './Components/icons/Icons.js'
import FadeLoader  from "react-spinners/FadeLoader";


function App() {
  const [loading,setLoading]=useState(false)
  useEffect(() => {
    setLoading(true);
    setTimeout(() =>{
      setLoading(false)
    },1500)
  }, [])

  return (
    <div>
     {loading ? (<div className="hashitem"> <div className="hashloader">@jy@</div><FadeLoader color={'#e2434b'} loading={loading}  height={40} width={5} radius={4} margin={45} /></div>) : (<div className="main">
      
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
