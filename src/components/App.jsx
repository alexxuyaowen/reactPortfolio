import React from "react";
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from "../pages";
import Contact from "../pages/contact";
import Portfolio from "../pages/portfolio";

function App() {
  return <Router>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
    </Routes>
    </Router>;
}

export default App;
