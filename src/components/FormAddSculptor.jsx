import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Para la navegación al Home

const FormAddSculptor = () => {
  const [sculptorData, setSculptorData] = useState({
    name: '',
    biography: '',
    contact: '',
    works: '',
  });

  // Función para manejar los cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSculptorData({
      ...sculptorData,
      [name]: value,
    });
  };

  // Función para enviar los datos al backend y agregar un nuevo escultor
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/sculptors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sculptorData),
      });

      if (response.ok) {
        alert('Escultor creado con éxito');
        // Limpiar el formulario después de agregar el escultor
        setSculptorData({
          name: '',
          biography: '',
          contact: '',
          works: '',
        });
      } else {
        alert('Error al crear el escultor');
      }
    } catch (error) {
      console.error('Error al crear el escultor:', error);
    }
  };

  return (
    <div className="container mx-auto my-8 p-4 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Nombre:</label>
          <input
            type="text"
            name="name"
            value={sculptorData.name}
            onChange={handleChange}
            placeholder="Nombre del escultor"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Biografía:</label>
          <textarea
            name="biography"
            value={sculptorData.biography}
            onChange={handleChange}
            placeholder="Biografía del escultor"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Contacto:</label>
          <input
            type="text"
            name="contact"
            value={sculptorData.contact}
            onChange={handleChange}
            placeholder="Contacto del escultor"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Obras previas:</label>
          <textarea
            name="works"
            value={sculptorData.works}
            onChange={handleChange}
            placeholder="Obras previas del escultor"
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
            Agregar Escultor
          </button>

          {/* Botón para regresar al Home */}
          <Link to="/sculptors">
            <button className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-md shadow-md">
              Atrás
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default FormAddSculptor;
