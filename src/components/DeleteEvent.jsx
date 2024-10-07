import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importamos Link para la navegación

const DeleteEvent = () => {
  const [eventName, setEventName] = useState('');
  const [message, setMessage] = useState('');

  // Función para manejar los cambios en el input
  const handleInputChange = (e) => {
    setEventName(e.target.value);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://tp2-paradigmas3-back.onrender.com/events', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ theme: eventName }), // El backend espera "theme" como el nombre del evento
      });

      if (response.ok) {
        setMessage('Evento eliminado con éxito');
        setEventName(''); // Limpiar el input
      } else if (response.status === 404) {
        setMessage('Evento no encontrado');
      } else {
        setMessage('Error al eliminar el evento');
      }
    } catch (error) {
      console.error('Error al eliminar el evento:', error);
      setMessage('Error al eliminar el evento');
    }
  };

  return (
    <div className="container mx-auto my-8 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Eliminar Evento</h2>

      {/* Formulario para eliminar el evento */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Nombre del Evento:</label>
          <input
            type="text"
            value={eventName}
            onChange={handleInputChange}
            placeholder="Introduce el nombre del evento"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>

        <div className="flex justify-center space-x-4">
          {/* Botón de eliminar evento */}
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md shadow-md"
          >
            Eliminar Evento
          </button>

          {/* Botón de volver atrás */}
          <Link to="/events">
            <button className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-md shadow-md">
              Atrás
            </button>
          </Link>
        </div>
      </form>

      {/* Mensaje de éxito o error */}
      {message && (
        <p className="mt-4 text-center text-gray-700">{message}</p>
      )}
    </div>
  );
};

export default DeleteEvent;
