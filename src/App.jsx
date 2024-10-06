import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import EventPage from './pages/EventPage';
import ScultorPage from './pages/ScultorPage';
import EventHistory from './pages/EventHistory';


const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Contenido principal */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<EventPage />} />
            <Route path="/sculptors" element={<ScultorPage />} />
            <Route path="/historyevent" element={<EventHistory />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
