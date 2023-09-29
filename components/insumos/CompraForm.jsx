"use client"
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker'; // Para seleccionar fechas
import 'react-datepicker/dist/react-datepicker.css';

function CompraForm() {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();
  const [insumos, setInsumos] = useState([
    {
      insumo: '',
      cantidad: '',
      precioUnitario: '',
    },
  ]);
  const [lotes, setLotes] = useState([
    {
      numeroLote: '',
      fechaVencimiento: null,
      cantidad: '',
    },
  ]);

  const onSubmit = (data) => {
    // Aquí puedes enviar los datos al servidor
    console.log(data);
  };

  const handleAddInsumo = () => {
    setInsumos([...insumos, { insumo: '', cantidad: '', precioUnitario: '' }]);
  };

  const handleRemoveInsumo = (index) => {
    const newInsumos = [...insumos];
    newInsumos.splice(index, 1);
    setInsumos(newInsumos);
  };

  const handleAddLote = () => {
    setLotes([...lotes, { numeroLote: '', fechaVencimiento: null, cantidad: '' }]);
  };

  const handleRemoveLote = (index) => {
    const newLotes = [...lotes];
    newLotes.splice(index, 1);
    setLotes(newLotes);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label htmlFor="almacen" className="block text-gray-600">
          Almacen:
        </label>
        <input
          type="text"
          id="almacen"
          {...register('almacen', { required: true })}
          className="border rounded-md p-2 w-full"
        />
        {errors.almacen && <p className="text-red-500">Este campo es requerido</p>}
      </div>

      {/* Agrega más campos del formulario aquí, como procedencia, solicitante, etc. */}

      {/* Insumos */}
      <h2 className="text-lg font-semibold mt-4">Insumos</h2>
      {insumos.map((insumo, index) => (
        <div key={index} className="grid grid-cols-4 gap-4">
          <div>
            <label htmlFor={`insumos[${index}].insumo`} className="block text-gray-600">
              Insumo:
            </label>
            <input
              type="text"
              id={`insumos[${index}].insumo`}
              {...register(`insumos[${index}].insumo`, { required: true })}
              className="border rounded-md p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor={`insumos[${index}].cantidad`} className="block text-gray-600">
              Cantidad:
            </label>
            <input
              type="number"
              id={`insumos[${index}].cantidad`}
              {...register(`insumos[${index}].cantidad`, { required: true })}
              className="border rounded-md p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor={`insumos[${index}].precioUnitario`} className="block text-gray-600">
              Precio Unitario:
            </label>
            <input
              type="number"
              id={`insumos[${index}].precioUnitario`}
              {...register(`insumos[${index}].precioUnitario`, { required: true })}
              className="border rounded-md p-2 w-full"
            />
          </div>
          <div>
            <button
              type="button"
              onClick={() => handleRemoveInsumo(index)}
              className="bg-red-500 text-white py-2 px-4 rounded-md mt-2 hover:bg-red-600"
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddInsumo}
        className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2 hover:bg-blue-600"
      >
        Agregar Insumo
      </button>

      {/* Lotes */}
      <h2 className="text-lg font-semibold mt-4">Lotes</h2>
      {lotes.map((lote, index) => (
        <div key={index} className="grid grid-cols-4 gap-4">
          <div>
            <label htmlFor={`lotes[${index}].numeroLote`} className="block text-gray-600">
              Número de Lote:
            </label>
            <input
              type="text"
              id={`lotes[${index}].numeroLote`}
              {...register(`lotes[${index}].numeroLote`, { required: true })}
              className="border rounded-md p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor={`lotes[${index}].fechaVencimiento`} className="block text-gray-600">
              Fecha de Vencimiento:
            </label>
            <Controller
              name={`lotes[${index}].fechaVencimiento`}
              control={control}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  selected={field.value}
                  dateFormat="yyyy-MM-dd"
                  className="border rounded-md p-2 w-full"
                />
              )}
            />
          </div>
          <div>
            <label htmlFor={`lotes[${index}].cantidad`} className="block text-gray-600">
              Cantidad:
            </label>
            <input
              type="number"
              id={`lotes[${index}].cantidad`}
              {...register(`lotes[${index}].cantidad`, { required: true })}
              className="border rounded-md p-2 w-full"
            />
          </div>
          <div>
            <button
              type="button"
              onClick={() => handleRemoveLote(index)}
              className="bg-red-500 text-white py-2 px-4 rounded-md mt-2 hover:bg-red-600"
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddLote}
        className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2 hover:bg-blue-600"
      >
        Agregar Lote
      </button>

      <div className="mt-4">
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Enviar
        </button>
      </div>
    </form>
  );
}

export default CompraForm;
