"use client";
"use client";

function InsumosView({insumos, proveedor}) {
  //console.log(insumos)
  return (
    <div className="text-black">
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-teal-950 bg-opacity-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">#</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Nombre</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Descripcion</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Precio</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Unidad</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Proveedor</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Editar</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {insumos.map((insumo, index) => (
            <tr key={insumos._id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="px-6 py-3 whitespace-nowrap text-md  text-gray-500">{index + 1}</td>
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
                <p className="text-sm text-gray-500">{insumo.proveedor}</p>
              </td>
              <td className="px-6 py-3 whitespace-nowrap">
                <button className="text-indigo-600 hover:text-indigo-900">Edit</button>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default InsumosView