import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Background from './components/Background';
import Header from './components/Header';
import Home from './pages/Home';
import CharacterPage from './pages/CharacterPage';
import ErrorPage from './pages/ErrorPage';
import FourOhFourPage from './pages/FourOhFourPage';

import './App.css';

const App = () => (
  <>
    <Background />
    <div className="container">
      <Header />
      <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:charid" element={<CharacterPage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<FourOhFourPage />} />
        </Routes>
      </BrowserRouter>
      </main>
      <p className="credit">Developed by Robert Franceschini</p>
    </div>
  </>
)


export default App;