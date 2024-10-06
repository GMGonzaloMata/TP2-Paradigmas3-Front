import { useState } from 'react';

function DeleteEventPage() {
  const [theme, setTheme] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/events`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ theme }),
      });

      if (response.ok) {
        alert('Evento eliminado con éxito');
        setTheme('');
      } else {
        alert('Error al eliminar el evento');
      }
    } catch (error) {
      console.error('Error al eliminar el evento:', error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Eliminar Evento</h2>
      <form onSubmit={handleDelete} className="space-y-4">
        <div>
          <label htmlFor="theme" className="block text-sm font-medium">Tema del Evento</label>
          <input
            type="text"
            name="theme"
            id="theme"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded-md">
          Eliminar Evento
        </button>
      </form>
    </div>
  );
}

export default DeleteEventPage;
