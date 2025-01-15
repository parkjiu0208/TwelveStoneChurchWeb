import Nav from './component/common/Nav';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WordPage from './pages/WordPage';
import HymnPage from './pages/HymnPage';
import GallaryPage from './pages/GallaryPage';

function App() {
  return (
    <div className="app-container">
      <Nav />
      <div className="content-container">
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/word" element={<WordPage />} />
          <Route path="/hymn" element={<HymnPage />} />
          <Route path="/gallary" element={<GallaryPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;