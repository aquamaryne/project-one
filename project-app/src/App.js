import 'tailwindcss/tailwind.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Clock from "./components/clock";
import Navbar from "./components/navbar";
import Games  from "./components/gaming";
import News  from "./components/news";
import Anime  from "./components/anime";
import Hardware  from "./components/hardware";
import Meta  from "./components/meta";
import Footer from "./components/Footer/footer";



export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/games" component={ Games }/>
        <Route path="/news" component={ News } />
        <Route path="/hardware" component={ Hardware } />
        <Route path="/anime" component={ Anime }/>
        <Route path="/meta" component={ Meta }/>
      </Routes>
      <div>
        <Navbar />
        <Footer />
      </div>
    </BrowserRouter>
  )
};



