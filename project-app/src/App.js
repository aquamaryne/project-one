import Clock from "./components/clock";
import Navbar from "./components/navbar"; 
import './css/navbar.css'
//import { Link } from 'react-router-dom';


const App = () => {
  return(
    <div className="navigate">
      <span className="title">  <a href = "./main" style = {{color: "#009DC9"}}> MAKEDIE </a> </span>
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

