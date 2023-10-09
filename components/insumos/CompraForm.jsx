"use client"
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker'; // Para seleccionar fechas
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import es from 'date-fns/locale/es'; 



function CompraForm({ingredientes, user}) {
  //console.log(user)
  //console.log(ingredientes)
  const [nombreInsumo, setNombreInsumo] = useState(''); // Agrega el estado para el nombre del insumo
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
      nombre: '',
    },
  ]);


  async function onSubmit(data){
    try {
      console.log(data)
      const res = await axios.post('/api/insumos/compra', data);
      console.log(res);  
      
    } catch (error) {
      console.log(error)
    }
    
  };

  const handleAddInsumo = () => {
    setInsumos([
      ...insumos,
      {
        insumo: '',
        cantidad: '',
        precioUnitario: '',
        nombre: '', 
      },
    ]);
  };

  const handleRemoveInsumo = (index) => {
    const newInsumos = [...insumos];
    newInsumos.splice(index, 1);
    setInsumos(newInsumos);
  };
  // Manejar el cambio en la selección de insumo
  const handleInsumoChange = (index, value) => {
    const newInsumos = [...insumos];
    newInsumos[index].insumo = value;
    const selectedIngrediente = ingredientes.find((ingrediente) => ingrediente._id === value);
    if (selectedIngrediente) {
      newInsumos[index].nombre = selectedIngrediente.nombre;
      setNombreInsumo(selectedIngrediente.nombre); // Actualizar el estado de nombreInsumo
    }
    setInsumos(newInsumos);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='bg-slate-50 p-3 rounded-md shadow-lg'>
      <h1 className='font-bold text-center uppercase my-5 italic text-2xl '>solicitud de compra</h1>
      <div className="mb-4 grid lg:grid-cols-3 gap-4 justify-evenly items-center">
        <div className=''>
          <label className="mr-2 text-gray-600">
            Almacen:
          </label>
          <input
            type="text"
            id="almacen"
            {...register('almacen', { required: true })}
            className="border rounded-md p-2"
          />
          {errors.almacen && <p className="text-red-500">El nombre del almacen es requerido</p>}
        </div>

        <div className=''>
          <label className='mr-2 text-gray-600'>
            Procedencia:
          </label>
          <select
            name="procedencia"
            id="procedencia"
            {...register('procedencia', { required: true })}
            className="border rounded-md py-2 px-3 max-w-md text-gray-700"
          >
            <option value="">Selecciona una procedencia</option>
            <option value="Nacional">Nacional</option>
            <option value="Importacion">Internacional</option>
            <option value="Interna">Interna</option>
          </select>
          {errors.procedencia && <p className="text-red-500">la procedencia es requerida</p>}
        </div>

        <div className=''>
          <label className="mr-2 text-gray-600">
            Solicitante:
          </label>
          <input
            type="text"
            id="solicitante"
            defaultValue={user.name}
            {...register('solicitante', { required: true })}
            
            className="border rounded-md p-2"
          />
          {errors.solicitante && <p className="text-red-500">El nombre del solicitante es requerido</p>}
        </div>
        <div>
          <label className="block text-gray-600">
            Fecha de solicitud:
          </label>
          <Controller
            name={`fecha_solicitud`}
            control={control}
            render={({ field }) => (
              <DatePicker
                {...field}
                selected={field.value}
                locale={es}
                dateFormat="dd-MM-yyyy"
                className="border rounded-md p-2 w-full"
              />
            )}
          />
        </div>

        <div>
          <label className="block text-gray-600">
            Fecha de requerida:
          </label>
          <Controller
            name={`fecha_requerida`}
            control={control}
            render={({ field }) => (
              <DatePicker
                {...field}
                selected={field.value}
                locale={es}
                dateFormat="dd-MM-yyyy"
                className="border rounded-md p-2 w-full"
              />
            )}
          />
        </div>
        <div className='m-2'>
          <label className="mr-2 text-gray-600">
            Departamento o area:
          </label>
          <input
            type="text"
            id="nombreDepartamento"
            {...register('nombreDepartamento', { required: true })}
            className="border rounded-md p-2"
          />
          {errors.solicitante && <p className="text-red-500">El nombre del solicitante es requerido</p>}
        </div>
      </div>

      {/* Insumos */}
      <h2 className="text-lg font-semibold mt-4">Insumos</h2>
      {insumos.map((insumo, index) => (
        <div key={index} className="grid grid-cols-4 gap-4">
          <div>
            <label htmlFor={`insumos[${index}].insumo`} className="block text-gray-600">
              Insumo:
            </label>
            <select
              id={`insumos[${index}].insumo`}
              {...register(`insumos[${index}].insumo`, { required: true })}
              onChange={(e) => handleInsumoChange(index, e.target.value)}
              className="border rounded-md p-2 w-full"
            >
              <option value="">Selecciona un insumo</option>
              {ingredientes.map((ingrediente) => (
                <option key={ingrediente._id} value={ingrediente._id}>
                  {ingrediente.nombre}
                </option>
              ))}
            </select>
          </div>
              
          <div className=''>
            <label>
              nombre y observaciones:
            </label>
            <input
              type="text"
              id={`insumos[${index}].nombre`}
              defaultValue={insumo.nombre}
              {...register(`insumos[${index}].nombre`, { required: true })}
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
      <div className="mt-4">
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Enviar
        </button>
      </div>
    </form>
  );
}

export default CompraForm;
