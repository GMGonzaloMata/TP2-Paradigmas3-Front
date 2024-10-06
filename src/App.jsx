import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import EventPage from './pages/EventPage';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Contenido principal */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<EventPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
