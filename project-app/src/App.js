// import './css/button.css';
// import './css/navbar.css';
// import './css/footer.css';
import { BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Clock from "./components/clock";
import Navbar from "./components/navbar";
import Games  from "./components/gaming";
import News  from "./components/news";
import Anime  from "./components/anime";
import Hardware  from "./components/hardware";
import Meta  from "./components/meta";
import Footer from "./components/footer";
import Button from './components/button';


export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="games" component={ Games }/>
          <Route path="news" component={ News } />
          <Route path="hardware" component={ Hardware } />
          <Route path="anime" component={ Anime }/>
          <Route path="meta" component={ Meta }/>
        </Route>
      </Routes>
      <div className="navigate">
        <div className="title">
          <span className="maintext"> 
          <Link to={"/"} > MAKEDIE </Link> 
          </span>
        </div>
        <div className="timer">
          <Clock />
        </div>
        <div className='button'>
          <Button />
        </div>
      </div>
      <div className='borders'></div>
      <div className="footer">
        <Footer />
      </div>
    </BrowserRouter>
  )
};



