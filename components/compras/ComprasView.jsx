"use client";
import { useState } from 'react';
import { format } from 'date-fns';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importa los iconos


function InsumosView({ compras }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 13;
 

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  const nextPage = () => {
    const items = compras.length;
    if (currentPage < Math.ceil(items / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">almacen</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">procedencia</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">solicitante</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">fecha de solicitud</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">fecha requerida</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">cantidad</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">insumos</th>
              
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">total</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {compras.slice(startIndex, endIndex).map((compra, index) => (
              <tr key={compra._id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-6 py-3 whitespace-nowrap text-md text-gray-500">{startIndex + index + 1}</td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <p className="text-sm font-medium text-gray-900">{compra.almacen}</p>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <p className="text-sm text-gray-500">{compra.procedencia}</p>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <p className="text-sm text-gray-500">{compra.solicitante}</p>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <p className="text-sm text-gray-500">
                    {compra.fecha_requerida && format(new Date(compra.fecha_requerida), 'dd/MM/yyyy')}
                  </p>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <p className="text-sm text-gray-500">
                    {compra.fecha_requerida && format(new Date(compra.fecha_requerida), 'dd/MM/yyyy')}
                  </p>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  {/* Insumos */}
                  {compra.insumos.map((insumo, insumoIndex) => (
                    <p key={insumoIndex}>{insumo.cantidad}</p>
                  ))}
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  {/* Insumos */}
                  {compra.insumos.map((insumo, insumoIndex) => (
                    <p key={insumoIndex}> {insumo.nombre}</p>
                  ))}
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  {/* Insumos */}
                  {compra.insumos.map((insumo, insumoIndex) => (
                    <p key={insumoIndex}>{insumo.total}</p>
                  ))}
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
          disabled={currentPage === Math.ceil(compras.length / itemsPerPage)}
          className="text-indigo-600 hover:text-indigo-900"
        >
          Siguiente <FaArrowRight />
        </button>
      </div>
    </div>
    );
}

export default InsumosView;