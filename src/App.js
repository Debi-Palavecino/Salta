import { BrowserRouter, Routes, Route } from "react-router-dom";
import Historia from "./componentes/Historia";
import Lugares from "./componentes/Lugares";
import Home from "./componentes/Home";
const App =()=>{
  return(
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Lugares" element={<Lugares />} />
        <Route path="/Historia" element={<Historia />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
