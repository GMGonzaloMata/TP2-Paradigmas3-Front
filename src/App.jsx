import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import EventPage from './pages/EventPage';
import EventList from './pages/EventListPage';
import SculptorPage from './pages/SculptorPage';
import AddEventPage from './pages/AddEventPage';
import AddSculptorPage from './pages/AddSculptorPage';
import SculptorListPage from './pages/SculptorListPage';
import DeleteEventPage from './pages/DeleteEventPage';
import ModifyEventPage from './pages/ModifyEventPage';
import DeleteSculptorPage from './pages/DeleteSculptorPage';
import ModifySculptorPage from './pages/ModifySculptorPage'; 

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
        <Route path="/delete-event" element={<DeleteEventPage />} />
        <Route path="/modify-event" element={<ModifyEventPage />} />
        <Route path="/delete-sculptor" element={<DeleteSculptorPage />} />
        <Route path="/modify-sculptor" element={<ModifySculptorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
