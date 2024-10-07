import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ModifyEvent = () => {
  const [theme, setTheme] = useState('');
  const [type, setType] = useState(''); // Para identificar qué se va a modificar (temática, fecha, ubicación, descripción)
  const [newValue, setNewValue] = useState(''); // El nuevo valor a actualizar

  // Función para manejar los cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'theme') setTheme(value);
    else if (name === 'type') setType(value);
    else setNewValue(value);
  };

  // Función para sumar un día a la fecha
  const addOneDay = (date) => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 1); // Sumar un día
    return newDate.toISOString().split('T')[0]; // Retorna solo la parte de la fecha
  };

  // Función para enviar los datos de modificación al backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let updatedValue = newValue;
      
      // Si el atributo a modificar es la fecha, ajustarla
      if (type === 'date') {
        updatedValue = addOneDay(newValue);
      }

      const response = await fetch('https://tp2-paradigmas3-back.onrender.com/events', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          theme,   // El tema del evento que vamos a modificar
          type,    // El tipo de modificación (theme, date, location, description)
          typeP: updatedValue,  // El nuevo valor a actualizar, con la fecha ajustada si es necesario
        }),
      });

      if (response.ok) {
        alert('Evento modificado con éxito');
        // Limpiar el formulario después de modificar el evento
        setTheme('');
        setType('');
        setNewValue('');
      } else {
        alert('No existe este evento');
      }
    } catch (error) {
      console.error('Error al modificar el evento:', error);
    }
  };

  return (
    <div className="container mx-auto my-8 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Modificar Evento</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Temática del Evento a Modificar:</label>
          <input
            type="text"
            name="theme"
            value={theme}
            onChange={handleChange}
            placeholder="Temática actual del evento"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Seleccionar Atributo a Modificar:</label>
          <select
            name="type"
            value={type}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          >
            <option value="">Seleccione el atributo</option>
            <option value="theme">Temática</option>
            <option value="date">Fecha</option>
            <option value="location">Ubicación</option>
            <option value="description">Descripción</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Nuevo Valor:</label>
          {type !== 'date' ? (
            <input
              type="text"
              name="newValue"
              value={newValue}
              onChange={handleChange}
              placeholder="Nuevo valor"
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          ) : (
            <input
              type="date"
              name="newValue"
              value={newValue}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          )}
        </div>
        <div className="text-center flex justify-center space-x-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md shadow-md"
          >
            Modificar Evento
          </button>
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

export default ModifyEvent;
