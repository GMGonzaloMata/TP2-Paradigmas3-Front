import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SculptorList from '../components/SculptorList'; // Importamos el componente de escultores
import { Link } from 'react-router-dom';
import fondo from '../assets/fondoo.webp';

const SculptorListPage = () => {
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
          <SculptorList />
          <Link to="/sculptors">
            <button className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-md shadow-md">
              Atrás
            </button>
          </Link>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default SculptorListPage;
