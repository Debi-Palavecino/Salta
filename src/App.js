import Home from "./componentes/Home";
import Nav from "./componentes/Nav";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Lugares from "./componentes/Lugares";
import Historia from "./componentes/Historia";
import AboutMe from "./componentes/AboutMe";
const App =()=>{
  return(
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Lugares" element={<Lugares/>}/>
        <Route path="/Historia" element={<Historia/>}/>
        <Route path="/AboutMe" element={<AboutMe/>}/>

      </Routes>
    </BrowserRouter>
  )
}
export default App;
