import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import EventPage from './pages/EventPage';
import EventList from './pages/EventListPage';
import SculptorPage from './pages/SculptorPage';
import AddEventPage from './pages/AddEventPage';
import AddSculptorPage from './pages/AddSculptorPage';
import DeleteScultorPage from './pages/DeleteSculptorPage';
import SculptorListPage from './pages/SculptorListPage';
import DeleteEventPage from './pages/DeleteEventPage'; // Importa la nueva página

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/sculptors" element={<SculptorPage />} />
        <Route path="/add-event" element={<AddEventPage />} />
        <Route path="/event-list" element={<EventList />}/>
        <Route path="/add-sculptor" element={<AddSculptorPage />} />
        <Route path="/sculptor-list" element={<SculptorListPage />} />
        <Route path="/delete-sculptor" element={<DeleteScultorPage />} />
        <Route path="/delete-event" element={<DeleteEventPage />} /> {/* Nueva ruta */}
      </Routes>
    </Router>
  );
};

export default App;
