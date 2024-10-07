import React, { useState, useEffect } from 'react';

const SculptorList = () => {
  const [sculptors, setSculptors] = useState([]);

  // Función para cargar todos los escultores
  const loadAllSculptors = async () => {
    try {
      const response = await fetch('https://tp2-paradigmas3-back.onrender.com/sculptors');
      const data = await response.json();
      setSculptors(data);
    } catch (error) {
      console.error('Error al cargar escultores:', error);
    }
  };

  // Cargar escultores cuando se monta el componente
  useEffect(() => {
    loadAllSculptors();
  }, []);

  return (
    <div className="container mx-auto my-8 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Registro de Escultores</h2>

      {/* Lista de escultores */}
      <ul className="space-y-4">
        {sculptors.length > 0 ? (
          sculptors.map((sculptor, index) => (
            <li key={index} className="border p-4 rounded-md shadow-md">
              <h3 className="text-xl font-bold">{sculptor.name}</h3>
              <p><strong>Biografía:</strong> {sculptor.biography}</p>
              <p><strong>Contacto:</strong> {sculptor.contact}</p>
              <p><strong>Obras Previas:</strong> {sculptor.works}</p>
            </li>
          ))
        ) : (
          <p className="text-gray-600 text-center">No hay escultores disponibles</p>
        )}
      </ul>
    </div>
  );
};

export default SculptorList;
