import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Pageprof from './pages/Page proffesseur';
import Creacours from './pages/Creationcours';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Pageprof />} />
        <Route exact path="/Creationcours" element={<Creacours />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
