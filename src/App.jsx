import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-bg-primary text-text-secondary transition-colors duration-300">
          <CustomCursor />
          <Navbar activeSection={activeSection} />
          
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home setActiveSection={setActiveSection} />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
            </Routes>
          </div>
          
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
