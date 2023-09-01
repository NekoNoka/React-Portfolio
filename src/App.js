import './App.css';
import "semantic-ui-css/semantic.min.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AboutMe from './pages/About Me';
// import Projects from './pages/Projects';
import NavBar from "./segments/NavBar";
import Footer from "./segments/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="/aboutme" element={<AboutMe />} />
          {/* <Route path="/jobs" element={<Jobs />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;