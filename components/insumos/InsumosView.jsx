"use client";
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importa los iconos

function InsumosView({ insumos }) {
  const [currentPage, setCurrentPage] = useState(1); // Estado para el número de página actual
  const itemsPerPage = 13; // Número de elementos por página

  // Calcula el índice de inicio y final para la página actual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  // Función para cambiar a la página siguiente
  const nextPage = () => {
    const items = insumos.length;
    if (currentPage < Math.ceil(items / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Función para cambiar a la página anterior
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="text-black">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-teal-950 bg-opacity-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">#</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Nombre</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Descripción</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Precio unitario</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">unidad de medida</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">existencia</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {insumos.slice(startIndex, endIndex).map((insumo, index) => (
              <tr key={insumo._id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-6 py-3 whitespace-nowrap text-md  text-gray-500">{startIndex + index + 1}</td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <p className="text-sm font-medium text-gray-900">{insumo.nombre}</p>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <p className="text-sm text-gray-500">{insumo.descripcion}</p>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <p className="text-sm text-gray-500">{insumo.precio_unitario}</p>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <p className="text-sm text-gray-500">{insumo.unidad_medida}</p>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <p className="text-sm text-gray-500">{insumo.existencia}</p>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <button className="text-indigo-600 hover:text-indigo-900">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="text-indigo-600 hover:text-indigo-900"
        >
          <FaArrowLeft /> Anterior
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(insumos.length / itemsPerPage)}
          className="text-indigo-600 hover:text-indigo-900"
        >
          Siguiente <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default InsumosView;
