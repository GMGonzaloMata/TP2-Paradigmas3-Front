import React, { useState, useEffect } from 'react';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [isFuture, setIsFuture] = useState(null); // Para determinar si cargamos eventos futuros o pasados

  // Función para cargar todos los eventos
  const loadAllEvents = async () => {
    try {
      const response = await fetch('https://tp2-paradigmas3-back.onrender.com/events/all');
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error('Error al cargar eventos:', error);
    }
  };

  // Función para cargar eventos futuros
  const loadFutureEvents = async () => {
    try {
      const response = await fetch('https://tp2-paradigmas3-back.onrender.com/events/future');
      const data = await response.json();
      setEvents(data);
      setIsFuture(true);
    } catch (error) {
      console.error('Error al cargar eventos futuros:', error);
    }
  };

  // Función para cargar eventos pasados
  const loadPastEvents = async () => {
    try {
      const response = await fetch('https://tp2-paradigmas3-back.onrender.com/events/past');
      const data = await response.json();
      setEvents(data);
      setIsFuture(false);
    } catch (error) {
      console.error('Error al cargar eventos pasados:', error);
    }
  };

  // Cargar todos los eventos al iniciar el componente
  useEffect(() => {
    loadAllEvents();
  }, []);

  return (
    <div className="container mx-auto my-8 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Registro de Eventos</h2>

      {/* Botones para cargar eventos futuros o pasados */}
      <div className="flex justify-between mb-6">
        <button
          onClick={loadPastEvents}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md shadow-md"
        >
          Cargar Eventos Pasados
        </button>
        <button
          onClick={loadAllEvents}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md shadow-md"
        >
          Cargar Todos los Eventos
        </button>
        <button
          onClick={loadFutureEvents}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md shadow-md"
        >
          Cargar Eventos Futuros
        </button>
      </div>

      {/* Lista de eventos */}
      <ul className="space-y-4">
        {events.length > 0 ? (
          events.map((event, index) => (
            <li key={index} className="border p-4 rounded-md shadow-md">
              <h3 className="text-xl font-bold">{event.theme}</h3>
              <p><strong>Fecha:</strong> {new Date(event.date).toLocaleDateString()}</p>
              <p><strong>Lugar:</strong> {event.location}</p>
              <p><strong>Descripción:</strong> {event.description}</p>
            </li>
          ))
        ) : (
          <p className="text-gray-600 text-center">No hay eventos disponibles</p>
        )}
      </ul>
    </div>
  );
};

export default EventList;
