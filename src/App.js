import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Pageprof from './pages/Pageproffesseur';
import Creacours from './pages/Creationcours';
import Pageetudiant from './pages/Pageetudiant';
import Appreciationetudiant from './pages/Pageappreetudiant';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Pageprof />} />
        <Route exact path="/Creationcours" element={<Creacours />} />
        <Route exact path="/Pageetudiant" element={<Pageetudiant />} />
        <Route exact path="/Pageappreetudiant" element={<Appreciationetudiant />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
