import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Sermons from './pages/SermonsPage';
import Hymn from './pages/HymnPage';
import Gallery from './pages/GalleryPage';
import Vision from './pages/VisonPage';
import News from './pages/NewsPage';
import WorshipTimes from './pages/WorshipTimesPage';
import Offering from './pages/OfferingPage';
import Location from './pages/LocationPage';
import Nav from './components/common/Nav';
import Footer from './components/common/Footer';

function App() {
  return (
    <div className="app-container">
      <Nav />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/hymn" element={<Hymn />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/news" element={<News />} />
          <Route path="/worship-times" element={<WorshipTimes />} />
          <Route path="/offering" element={<Offering />} />
          <Route path="/location" element={<Location />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;