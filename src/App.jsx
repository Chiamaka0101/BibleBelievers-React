import './App.css';
// Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Testimony from "./Pages/Testimony"
import Sermon from "./Pages/Sermon";
import Doctrine from "./Pages/Doctrine";
import Activites from "./Pages/Activities";
import Links from "./Pages/Links";
import Form from "./Pages/Form";
import Contact from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='Sermon' element={<Sermon />} />
      <Route path='Doctrine' element={<Doctrine />} />
      <Route path='Activities' element={<Activites />} />
      <Route path='Links' element={<Links />} />
      <Route path='Form' element={<Form />} />
      <Route path='Contact' element={<Contact />} />
      <Route path='Testimony' element={<Testimony />} />
    </Routes>
    </BrowserRouter>
  
  )
}

export default App;
