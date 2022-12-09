//import "bootstrap/dist/css/bootstrap.min.css";
import Clock from "./components/clock";
import Navbar from "./components/navbar"; 
import './css/navbar.css'
//import { Link } from 'react-router-dom';


const App = () => {
  return(
    <div className="navigate">
      <span className="title"> MAKEDIE </span>
      <div className="navText">
        <Navbar />
      </div>
      <div className="timer">
      <Clock />
      </div>
    </div> 
  )
}

export default App;

