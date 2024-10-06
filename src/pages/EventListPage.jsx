import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EventListPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);  // Para controlar el estado de carga
  const [error, setError] = useState(null);  // Para controlar posibles errores
  const navigate = useNavigate(); // Hook para la navegación

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:3000/events/future');
        if (!response.ok) {
          throw new Error('Error al obtener los eventos');
        }
        const data = await response.json();
        setEvents(data);
        setLoading(false);  // Detener la carga una vez que los datos se obtienen
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <p>Cargando eventos...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Eventos Futuros</h2>

      {/* Botones de acción */}
      <div className="mb-6">
        <button 
          onClick={() => navigate('/create-event')} 
          className="bg-blue-500 text-white px-4 py-2 mr-2 rounded-md">
          Crear Evento
        </button>
        <button 
          onClick={() => navigate('/all-events')} 
          className="bg-green-500 text-white px-4 py-2 mr-2 rounded-md">
          Mostrar Todos los Eventos
        </button>
        <button 
          onClick={() => navigate('/delete-event')} 
          className="bg-red-500 text-white px-4 py-2 rounded-md">
          Eliminar Evento
        </button>
      </div>

      {events.length === 0 ? (
        <p>No hay eventos futuros disponibles</p>
      ) : (
        <ul>
          {events.map((event) => (
            <li key={event.theme} className="mb-4 border p-4 rounded-md">
              <h3 className="text-lg font-bold">{event.theme}</h3>
              <p><strong>Fecha:</strong> {new Date(event.date).toLocaleDateString()}</p>
              <p><strong>Ubicación:</strong> {event.location}</p>
              <p><strong>Descripción:</strong> {event.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EventListPage;
