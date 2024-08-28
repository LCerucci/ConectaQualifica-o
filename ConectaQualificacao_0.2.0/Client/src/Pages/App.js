import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Componentes para as páginas
import { Navbar } from '../Components/UI/Navbar.js';
import Header from "./Header.js";
import Footer from "./Footer.js";
import Home from "../Components/Home.js";
import Instituicoes from "./Instituicoes.js";
import Cursos from "./Cursos.js";
import Sobre from "./Sobre.js";
import SDE from "./SDE.js";

const App = () => (
  <Router>
    <div>
      <Header />

        <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Instituicoes" element={<Instituicoes />} />
        <Route path="/Cursos" element={<Cursos />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/SDE" element={<SDE />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
