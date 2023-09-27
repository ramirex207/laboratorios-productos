"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";


function ProviderForm () {
  const router = useRouter();
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    direccion: '',
    telefono: '',
  });

  // Manejar cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para enviar los datos al backend,
    // como hacer una solicitud HTTP POST utilizando Axios o Fetch.
    // Por ejemplo:
    
    try {
      const response = await fetch('/api/proveedores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // El envío fue exitoso, puedes realizar acciones adicionales aquí.
        console.log('Datos enviados exitosamente');
        router.refresh();
      }
    } catch (error) {
      console.error('Error al enviar datos:', error);
    }
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="nombre" className="block text-gray-600">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleInputChange}
          required
          className="border rounded-md p-2 w-full bg-opacity-10 bg-black"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="direccion" className="block text-gray-600">Dirección:</label>
        <input
          type="text"
          id="direccion"
          name="direccion"
          value={formData.direccion}
          onChange={handleInputChange}
          required
          className="border rounded-md p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="telefono" className="block text-gray-600">Teléfono:</label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleInputChange}
          required
          className="border rounded-md p-2 w-full"
        />
      </div>
      <div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Enviar</button>
      </div>
    </form>
  );
};

export default ProviderForm;
