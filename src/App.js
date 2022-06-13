import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, HashRouter, Routes } from "react-router-dom";
import Home from "./pages";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
