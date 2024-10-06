import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importamos Link para la navegación

const FormAddEvent = () => {
  const [eventData, setEventData] = useState({
    date: '',
    location: '',
    description: '',
    theme: '',
  });

  // Función para manejar los cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
  };

  // Función para enviar los datos al backend y crear un nuevo evento
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });

      if (response.ok) {
        alert('Evento creado con éxito');
        // Limpiar el formulario después de agregar el evento
        setEventData({
          date: '',
          location: '',
          description: '',
          theme: '',
        });
      } else {
        alert('Error al crear el evento');
      }
    } catch (error) {
      console.error('Error al crear el evento:', error);
    }
  };

  return (
    <div className="container mx-auto my-8 p-4 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Temática:</label>
          <input
            type="text"
            name="theme"
            value={eventData.theme}
            onChange={handleChange}
            placeholder="Temática del evento"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Fecha del evento:</label>
          <input
            type="date"
            name="date"
            value={eventData.date}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Lugar del evento:</label>
          <input
            type="text"
            name="location"
            value={eventData.location}
            onChange={handleChange}
            placeholder="Ubicación"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Descripción:</label>
          <textarea
            name="description"
            value={eventData.description}
            onChange={handleChange}
            placeholder="Descripción del evento"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>

        {/* Contenedor para los botones */}
        <div className="flex justify-center space-x-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md shadow-md"
          >
            Agregar Evento
          </button>

          {/* Botón para regresar al Home */}
          <Link to="/events">
            <button className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-md shadow-md">
              Atrás
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default FormAddEvent;
