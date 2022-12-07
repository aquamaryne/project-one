import Clock from "./components/clock";
import Navbar from "./components/navbar"; 
import './css/navbar.css'



const App = () => {
  return(
    <div className="navigate">
      <span className="title text navtext"> MAKEDIE </span>
      <Navbar />
      <div className="timer">
      <Clock />
      </div>
    </div> 
  )
}

export default App;

