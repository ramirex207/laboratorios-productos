"use client"
import { useRouter } from "next/navigation"

function ButtonAgregar() {
    const router = useRouter()
  return (
    <button 
    className='bg-teal-700 px-4 py-2 my-2 rounded-lg mt-4 hover:bg-teal-400 hover:text-zinc-700 hover:transition-transform w-full text-slate-300 font-bold' 
    onClick={() => router.push('/dashboard-Admin/proveedores/register')}>  
        AÑADIR PROVEEDOR
    </button>
  )
}

export default ButtonAgregar