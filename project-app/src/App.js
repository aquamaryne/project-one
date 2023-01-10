import { Router, Routes, Link} from "react-router-dom";
import Clock from "./components/clock";
import './css/navbar.css';
import Games from "./components/gaming";
import News from "./components/news";
import Anime from "./components/anime";
import Hardware from "./components/hardware";
import Top100 from "./components/topone";

const App = () => {
  return(
    <div className="navigate">
      <div className="title">
        <span>  <a href = "./main" style = {{color: "#009DC9"}}> MAKEDIE </a> </span>
      </div>
      <div className = "navText">
        
      </div>
      <div className="timer">
        <Clock />
      </div>
    </div> 
  )
}

export default App;

