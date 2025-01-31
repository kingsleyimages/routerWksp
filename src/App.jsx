import React from 'react';
import Blue from './pages/Blue';
import Home from './pages/Home';
import Red from './pages/Red';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div id="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blue" element={<Blue />} />
        <Route path="red" element={<Red />} />
      </Routes>
    </div>
  );
}

export default App;
