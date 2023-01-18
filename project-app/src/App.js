import { BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Clock from "./components/clock";
import Navbar from "./components/navbar";
import './css/navbar.css';
import Games from "./components/gaming";
import News from "./components/news";
import Anime from "./components/anime";
import Hardware from "./components/hardware";
import Top100 from "./components/topone";
import { Component } from "react";


class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/games" component={ Games }/>
          <Route path="/news" component={ News } />
          <Route path="/hardware" component={ Hardware } />
          <Route path="/anime" component={ Anime }/>
          <Route path="/topone" component={ Top100 }/>
        </Routes>
        <div className="navigate">
          <div className="title">
            <span style={{color : 'aliceblue'}}> 
            <Link to={"/"} > MAKEDIE </Link> 
            </span>
          </div>
          <div className="navText" style={{ color:'white' }}>
            <Navbar />
          </div>
          <div className="timer">
            <Clock />
          </div>
          <div className="footer">

          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

