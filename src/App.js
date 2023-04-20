import React from "react";
import "./index.css";
import {Routes, Route} from "react-router-dom";
import Home from './routes/Home';
// import Projects from './routes/Projects';
import About from './routes/About';
import Contact from './routes/Contact';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/Projects" element={<Projects />} /> */}
          {/* <Route path="/Projects" element={<Home />} /> */}
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
