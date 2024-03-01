
import {Routes, Route} from "react-router-dom";
import './App.css'
import LandingPage from './Components/landingPage/LandingPage';
import HomePage from './Components/Home Page/Homepage';
import Nav from './Components/Nav/Nav';
import DetailPage from './Components/DetailPage/DetailView';
import { useLocation } from 'react-router-dom';
import Formulario from "./Components/Form Page/formulario";

function App() {
  const {pathname} =useLocation()

  return (
    <>
      <div className="App">
        {pathname !== '/' ? <Nav/> : null}
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/detail/:id" element={<DetailPage/>} />
        <Route path="/form" element={<Formulario/>} />
      </Routes>
      
      </div>

    </>
  )
}

export default App
