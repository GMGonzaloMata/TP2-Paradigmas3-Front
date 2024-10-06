import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventList from '../components/EventList'; // Importamos el componente de la lista de eventos

const EventListPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      {/* Navbar */}
      <Navbar />

      {/* Contenido principal */}
      <section className="container mx-auto text-center py-16">
        <EventList />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EventListPage;
