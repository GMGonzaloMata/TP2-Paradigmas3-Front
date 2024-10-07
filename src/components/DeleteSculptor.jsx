import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importamos Link para la navegación

const DeleteSculptor = () => {
  const [sculptorName, setSculptorName] = useState('');
  const [message, setMessage] = useState('');

  // Función para manejar los cambios en el input
  const handleInputChange = (e) => {
    setSculptorName(e.target.value);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://tp2-paradigmas3-back.onrender.com/sculptors', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: sculptorName }), // El backend espera "name" como el nombre del escultor
      });

      if (response.ok) {
        setMessage('Escultor eliminado con éxito');
        setSculptorName(''); // Limpiar el input
      } else if (response.status === 404) {
        setMessage('Escultor no encontrado');
      } else {
        setMessage('Error al eliminar el escultor');
      }
    } catch (error) {
      console.error('Error al eliminar el escultor:', error);
      setMessage('Error al eliminar el escultor');
    }
  };

  return (
    <div className="container mx-auto my-8 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Eliminar Escultor</h2>

      {/* Formulario para eliminar el escultor */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Nombre del Escultor:</label>
          <input
            type="text"
            value={sculptorName}
            onChange={handleInputChange}
            placeholder="Introduce el nombre del escultor"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>

        <div className="flex justify-center space-x-4">
          {/* Botón de eliminar escultor */}
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md shadow-md"
          >
            Eliminar Escultor
          </button>

          {/* Botón de volver atrás */}
          <Link to="/sculptors">
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

export default DeleteSculptor;
