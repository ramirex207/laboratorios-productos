"use client"
import { useRouter } from "next/navigation"

function BtnSolicitudCompra() {
    const router = useRouter()
  return (
    <button 
    className='bg-cyan-700 px-4 py-2 my-2 rounded-lg mt-4 hover:bg-cyan-400 hover:text-zinc-700 hover:transition-transform w-full text-slate-300 font-bold' 
    onClick={() => router.push('/dashboard-Admin/insumos/register')}>  
        Solicitud de Compra
    </button>
  )
}

export default BtnSolicitudCompra