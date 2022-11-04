import Navbar from "./components/navbar"; 
import './css/navbar.css'
import Title from "./components/title";

const App = () => {
  return(
    <div className="navigate title">
      <Title />
      <Navbar />
    </div> 
  )
}

export default App;
