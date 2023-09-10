import React from "react";
import { Route,Routes} from 'react-router-dom'
import './index.css'
import Home from "./pages/Home";
import About from "./pages/About";
import Portfilio from "./pages/Portfilio";
import Navigation from "./Componeents/Navigation";
import Error from "./pages/Error";
import Services from "./pages/Services";

const App=()=>{
  return(
    <>
      <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/Portfilio" element={<Portfilio />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/*" element={<Error />}/>
        </Routes>

    </>
  )
}
export default App;