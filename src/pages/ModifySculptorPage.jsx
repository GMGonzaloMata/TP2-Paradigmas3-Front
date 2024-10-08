import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ModifySculptor from '../components/ModifySculptor'; // Importamos el componente ModifySculptor
import fondo from '../assets/fondoo.webp';

const ModifySculptorPage = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-between"
      style={{ backgroundImage: `url(${fondo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="min-h-screen  flex flex-col justify-between">
        {/* Navbar */}
        <Navbar />

        {/* Contenido principal */}
        <section className="container mx-auto text-center py-16">
          <ModifySculptor /> {/* Aplicamos el componente ModifySculptor */}
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default ModifySculptorPage;
