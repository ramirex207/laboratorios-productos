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
  const [errors, setErrors] = useState({});

  // Manejar cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    //crea las validaciones para formData donde en el nombre no se acepten numeros en telefono sea de 8 digitos y ningun campo debe estar vacio 
    if(formData.nombre === '' || formData.direccion === '' || formData.telefono === ''){
    setErrors({message: 'Todos los campos son obligatorios'})
      return
    }
    if(formData.nombre.length < 4){
      setErrors({message: 'El nombre debe tener al menos 4 caracteres'})
      return
    }
    if(formData.direccion.length < 4){
      setErrors({message: 'La direccion debe tener al menos 4 caracteres'})
      return
    }
    if(formData.telefono.length < 8){
      setErrors({message: 'El telefono debe tener al menos 8 caracteres'})
      return
    }
    
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
        router.push('/dashboard-Admin/proveedores');
      }
    } catch (error) {
      console.error('Error al enviar datos:', error);
    }
    
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto bg-teal-400 p-6 rounded-md bg-opacity-20 shadow-md">
    {errors.message && (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
        <strong className="font-bold">Error! </strong>
        <span className="block sm:inline">{errors.message}</span>
      </div>
    )}
    <div className="mb-4">
      <label htmlFor="nombre" className="block text-slate-800 font-bold lg:text-xl italic mb-1">Nombre:</label>
      <input
        type="text"
        id="nombre"
        name="nombre"
        value={formData.nombre}
        onChange={handleInputChange}
        required
        className="border rounded-md py-2 px-3 w-full bg-opacity-20 bg-teal-800 text-gray-700"
      />
    </div>
    <div className="mb-4">
    <label htmlFor="nombre" className="block text-slate-800 font-bold lg:text-xl italic mb-1">Dirección:</label>
      <input
        type="text"
        id="direccion"
        name="direccion"
        value={formData.direccion}
        onChange={handleInputChange}
        required
        className="border rounded-md py-2 px-3 w-full text-gray-700"
      />
    </div>
    <div className="mb-4">
    <label htmlFor="nombre" className="block text-slate-800 font-bold lg:text-xl italic mb-1">Celular:</label>
      <input
        type="tel"
        id="telefono"
        name="telefono"
        value={formData.telefono}
        onChange={handleInputChange}
        required
        className="border rounded-md py-2 px-3 w-full text-gray-700"
      />
    </div>
    <div className="text-center">
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        Enviar
      </button>
    </div>
  </form>
  );
};

export default ProviderForm;
