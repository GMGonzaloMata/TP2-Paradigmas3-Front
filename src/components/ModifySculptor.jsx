import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const ModifySculptor = () => {
  const [name, setName] = useState(''); // El nombre actual del escultor
  const [type, setType] = useState(''); // El campo que se va a modificar (name, biography, contact, works)
  const [newValue, setNewValue] = useState(''); // El nuevo valor del campo seleccionado
  const [message, setMessage] = useState(''); // Mensaje de éxito o error

  // Función para manejar los cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    else if (name === 'type') setType(value);
    else setNewValue(value);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/sculptors', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,    // El nombre del escultor que vamos a modificar
          type,    // El tipo de modificación (name, biography, contact, works)
          newValue // El nuevo valor que queremos asignar
        }),
      });

      if (response.ok) {
        setMessage('Escultor modificado con éxito');
        // Limpiar el formulario después de modificar el escultor
        setName('');
        setType('');
        setNewValue('');
      } else {
        setMessage('Error al modificar el escultor');
      }
    } catch (error) {
      console.error('Error al modificar el escultor:', error);
      setMessage('Error al modificar el escultor');
    }
  };

  return (
    <div className="container mx-auto my-8 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Modificar Escultor</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Nombre del Escultor a Modificar:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Nombre actual del escultor"
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
            <option value="name">Nombre</option>
            <option value="biography">Biografía</option>
            <option value="contact">Contacto</option>
            <option value="works">Obras Previas</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Nuevo Valor:</label>
          <input
            type="text"
            name="newValue"
            value={newValue}
            onChange={handleChange}
            placeholder="Nuevo valor"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div className="text-center flex justify-center space-x-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md shadow-md"
          >
            Modificar Escultor
          </button>
          <Link to="/sculptors">
            <button className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-md shadow-md">
              Atrás
            </button>
          </Link>
        </div>
      </form>

      {/* Mensaje de éxito o error */}
      {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
    </div>
  );
};

export default ModifySculptor;
