import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateEventPage from './pages/CreateEventPage';
import EventListPage from './pages/EventListPage';
import AllEventsPage from './pages/AllEventsPages';
import DeleteEventPage from './pages/DeleteEventPage';

function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Gestión de Eventos</h1>
        <Routes>
          <Route path="/" element={<EventListPage />} />
          <Route path="/create-event" element={<CreateEventPage />} />
          <Route path="/all-events" element={<AllEventsPage />} />
          <Route path="/delete-event" element={<DeleteEventPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

