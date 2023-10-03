"use client";
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';


function InsumosForm({proveedores, medidas}) {
  //console.log(medidas)
  
  //console.log(proveedores)
  const router = useRouter();
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    precio_unitario: '',
    unidad_medida: '',
    proveedor: '',
    existencia: '',
  });
  const [errors, setErrors] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    //console.log(formData)
    // Validaciones (agrega aquí tus validaciones personalizadas)

    try {
      const res = await axios.post('/api/insumos', formData);
     // console.log(res.data);

      // Si el envío fue exitoso, puedes redirigir o hacer otras acciones
      if (res.status === 200) {
        router.push('/ruta-de-exito'); // Reemplaza 'ruta-de-exito' con la URL correcta
      }
    } catch (error) {
      console.error(error);
      setErrors('Hubo un error al enviar los datos. Por favor, inténtalo de nuevo.'); // Mensaje de error personalizado
    }
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Formulario de Insumos</h2>
      {errors && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Error:</strong> {errors}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="nombre" className="block text-gray-600">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
            required
            className="border rounded-md py-2 px-3 w-full bg-opacity-10 bg-black text-gray-700"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="descripcion" className="block text-gray-600">Descripción:</label>
          <input
            type="text"
            id="descripcion"
            name="descripcion"
            value={formData.descripcion}
            onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
            required
            className="border rounded-md py-2 px-3 w-full bg-opacity-10 bg-black text-gray-700"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="precio_unitario" className="block text-gray-600">Precio por unidad en Bs.:</label>
          <input
            type="number"
            id="precio_unitario"
            name="precio_unitario"
            value={formData.precio_unitario}
            onChange={(e) => setFormData({ ...formData, precio_unitario: e.target.value })}
            required
            className="border rounded-md py-2 px-3 w-full bg-opacity-10 bg-black text-gray-700"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Unidad de medida:</label>
          <select
            id="unidad_medida"
            name="unidad_medida"
            value={formData.unidad_medida}
            onChange={(e) => setFormData({ ...formData, unidad_medida: e.target.value })}
            className="border rounded-md py-2 px-3 w-full bg-opacity-10 bg-black text-gray-700"
          >
            <option value="">Selecciona una unidad de medida</option>
            {medidas.map((medida) => (
              <option key={medida.id} value={medida.nombre}>
                {medida.nombre}
              </option>
            ))}
          
          </select>
          
            </div>
        <div className="mb-4">
          <label htmlFor="proveedor" className="block text-gray-600">Proveedor:</label>
          <select
            id="proveedor"
            name="proveedor"
            value={formData.proveedor}
            onChange={(e) => setFormData({ ...formData, proveedor: e.target.value })}
            className="border rounded-md py-2 px-3 w-full bg-opacity-10 bg-black text-gray-700"
          >
            <option value="">Selecciona un proveedor</option>
            {proveedores.map((proveedor) => (
              <option key={proveedor._id} value={proveedor._id}>
                {proveedor.nombre}
              </option>
            ))}
          
          </select>
          
        </div>
        <div className="mb-4">
          <label htmlFor="cantidad" className="block text-gray-600">Cantidad inicial:</label>
          <input
            type="number"
            id="cantidad"
            name="cantidad"
            value={formData.existencia}
            onChange={(e) => setFormData({ ...formData, existencia: e.target.value })}
            className="border rounded-md py-2 px-3 w-full bg-opacity-10 bg-black text-gray-700"
          />
        </div>
        <div className="text-center">
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default InsumosForm;
