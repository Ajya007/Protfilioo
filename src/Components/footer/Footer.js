
import {animateScroll as scroll} from "react-scroll"
function Footer() {


    return (
        <>
        <footer>
        <ul>
           <li><a href="#"><i className="fa fa-twitter fa-1.5x"></i></a></li>
            <li><a href="#"><i className="fa fa-facebook fa-1.5x" style={{marginBottom: '5px'}}> </i></a></li>
          <li><a href="#"><i className="fa fa-instagram fa-1.5x"></i></a></li>
          <li><a href="#"><i className="fa fa-github fa-1.5x"></i></a></li>
          </ul>
      <p>Built by Ajay Gubhaju</p>
      <p><span id="edit"><span id="dash-1">\</span>_<span id="eyes">( </span><span id="curve">)</span>_<span id="dash-2">/</span></span></p>

      </footer>
      </>
    )
}

export default Footer
