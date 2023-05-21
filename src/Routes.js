import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from './pages/home/Home'
import Programmer from './pages/programmer/Programmer';
import Highlight from './pages/highlight/Highlight';


const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programmer" element={<Programmer />} />
        <Route path="/highlight" element={<Highlight />} />
        <Route
          path="*"
          element={
            <>
              <h1>Not Found 404</h1>
              <Link className="button" to="/">Go Home</Link>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default Rutas;