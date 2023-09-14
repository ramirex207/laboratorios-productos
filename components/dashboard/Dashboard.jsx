
import {FaAddressBook,FaCreditCard, FaUsers,FaFileInvoiceDollar,FaBoxes, FaTruckLoading, FaBoxOpen, FaCalculator,FaDollarSign, FaBook} from 'react-icons/fa'
import {FaHandHoldingDollar} from 'react-icons/fa6'
import {ImLab} from 'react-icons/im'

function Dashboard({products}) {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
        <div className='bg-teal-700 flex lg:max-w-xs max-w-lg items-center'>
            <div className='bg-teal-500 w-20 h-20 flex items-center justify-center'>
                <FaUsers className='text-5xl text-center transition-all hover:-rotate-45 hover:scale-110'/>
            </div>
            <div className='max-w-md ml-2'>
                <h2>Clientes</h2>
                <h3 className='text-2xl'>16</h3>
            </div>
        </div>

        <div className='bg-orange-700 flex max-w-lg lg:max-w-xs items-center'>
            <div className='bg-orange-500 w-20 h-20 flex items-center justify-center'>
                <FaAddressBook className='text-5xl text-center transition-all hover:-rotate-45 hover:scale-110'/>
            </div>
            <div className='max-w-md ml-2'>
                <h2>Proveedores</h2>
                <h3 className='text-2xl'>16</h3>
            </div>
        </div>

        <div className='bg-indigo-700 flex max-w-lg lg:max-w-xs items-center'>
            <div className='bg-indigo-500 w-20 h-20 flex items-center justify-center'>
                <ImLab className='text-5xl text-center transition-all hover:-rotate-45 hover:scale-110'/>
            </div>
            <div className='max-w-md ml-2'>
                <h2>Productos</h2>
                <h3 className='text-2xl'>16</h3>
            </div>
        </div>

        <div className='bg-slate-700 flex max-w-lg items-center lg:max-w-xs'>
            <div className='bg-slate-500 w-20 h-20 flex items-center justify-center'>
                <FaFileInvoiceDollar className='text-5xl text-center transition-all hover:-rotate-45 hover:scale-110'/>
            </div>
            <div className='max-w-md ml-2'>
                <h2>Facturas</h2>
                <h3 className='text-2xl'>16</h3>
            </div>
        </div>

        <div className='bg-violet-700 flex max-w-lg items-center lg:max-w-xs'>
            <div className='bg-violet-500 w-20 h-20 flex items-center justify-center'>
                <FaTruckLoading className='text-5xl text-center transition-all hover:-rotate-45 hover:scale-110'/>
            </div>
            <div className='max-w-md ml-2'>
                <h2>Existencia Vendida</h2>
                <h3 className='text-2xl'>16</h3>
            </div>
        </div>

        <div className='bg-lime-700 flex max-w-lg items-center lg:max-w-xs'>
            <div className='bg-lime-500 w-20 h-20 flex items-center justify-center'>
                <FaBoxOpen className='text-5xl text-center transition-all hover:-rotate-45 hover:scale-110'/>
            </div>
            <div className='max-w-md ml-2'>
                <h2>Existencia Actual</h2>
                <h3 className='text-2xl'>16</h3>
            </div>
        </div>
    
        <div className='bg-sky-700 flex max-w-lg items-center lg:max-w-xs'>
            <div className='bg-sky-500 w-20 h-20 flex items-center justify-center'>
                <FaBoxes className='text-5xl text-center transition-all hover:-rotate-45 hover:scale-110'/>
            </div>
            <div className='max-w-md ml-2'>
                <h2>Existencia Total</h2>
                <h3 className='text-2xl'>16</h3>
            </div>
        </div>
        <div className='bg-emerald-700 flex max-w-lg items-center lg:max-w-xs'>
            <div className='bg-emerald-500 w-20 h-20 flex items-center justify-center'>
                <FaCreditCard className='text-5xl text-center transition-all hover:-rotate-45 hover:scale-110'/>
            </div>
            <div className='max-w-md ml-2'>
                <h2>Importe vendido</h2>
                <h3 className='text-2xl'>16</h3>
            </div>
        </div>

        
        <div className='bg-orange-700 flex max-w-lg items-center lg:max-w-xs'>
            <div className='bg-orange-500 w-20 h-20 flex items-center justify-center'>
                <FaBook className='text-5xl text-center transition-all hover:-rotate-45 hover:scale-110'/>
            </div>
            <div className='max-w-md ml-2'>
                <h2>Importe Pagado</h2>
                <h3 className='text-2xl'>16</h3>
            </div>
        </div>

        <div className='bg-pink-700 flex max-w-lg items-center lg:max-w-xs'>
            <div className='bg-pink-500 w-20 h-20 flex items-center justify-center'>
                <FaCalculator className='text-5xl text-center transition-all hover:-rotate-45 hover:scale-110'/>
            </div>
            <div className='max-w-md ml-2'>
                <h2>Importe Restante</h2>
                <h3 className='text-2xl'>16</h3>
            </div>
        </div>


        <div className='bg-amber-700 flex max-w-lg items-center lg:max-w-xs'>
            <div className='bg-amber-500 w-20 h-20 flex items-center justify-center'>
                <FaDollarSign className='text-5xl text-center transition-all hover:-rotate-45 hover:scale-110'/>
            </div>
            <div className='max-w-md ml-2'>
                <h2>Beneficio Bruto</h2>
                <h3 className='text-2xl'>16</h3>
            </div>
        </div>

        <div className='bg-green-700 flex max-w-lg items-center lg:max-w-xs'>
            <div className='bg-green-500 w-20 h-20 flex items-center justify-center'>
                <FaHandHoldingDollar className='text-5xl text-center transition-all hover:-rotate-45 hover:scale-110'/>
            </div>
            <div className='max-w-md ml-2'>
                <h2>Beneficio Neto</h2>
                <h3 className='text-2xl'>16</h3>
            </div>
        </div>

    </div>
  )
}

export default Dashboard