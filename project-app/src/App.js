// import './css/button.css';
import './css/navbar.css';
import './css/footer.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Clock from "./components/clock";
import Navbar from "./components/navbar";
import Games  from "./components/gaming";
import News  from "./components/news";
import Anime  from "./components/anime";
import Hardware  from "./components/hardware";
import Meta  from "./components/meta";
import Footer from "./components/footer";
import DarkMode from './components/darkswitch';
// import Button from './components/button';


export default function App(){
  return(
    <BrowserRouter>
      <div className="navbar">
        <Navbar />
      </div>
      <div className='darkmode'>
        <DarkMode />
      </div>
      <div className='footer'>
        <Footer />
      </div>
      <Routes>
        <Route path="/games" component={ Games }/>
        <Route path="/news" component={ News } />
        <Route path="/hardware" component={ Hardware } />
        <Route path="/anime" component={ Anime }/>
        <Route path="/meta" component={ Meta }/>
      </Routes>
    </BrowserRouter>
  )
};



