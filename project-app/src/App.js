import 'tailwindcss/tailwind.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Clock from "./components/clock";
import Navbar from "./components/navbar";
import DarkSouls from './components/DarkSouls';
import DarkSoulsII from './components/DarkSoulsII';
import DarkSoulsIII from './components/DarkSoulsIII';
import Bloodborne from './components/Bloodborne';
import EldenRing from './components/EldenRing';
import Footer from "./components/Footer/footer";



export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/DarkSouls" component={ DarkSouls }/>
        <Route path="/DarkSoulsII" component={ DarkSoulsII } />
        <Route path="/DarkSoulsIII" component={ DarkSoulsIII } />
        <Route path="/Bloodborne" component={ Bloodborne }/>
        <Route path="/EldenRing" component={ EldenRing }/>
      </Routes>
      <div>
        <Navbar />
        <Footer />
      </div>
    </BrowserRouter>
  )
};



