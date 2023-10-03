import InsumosForm from '@components/insumos/InsumosForm'
import axios from 'axios';
async function getProveedores(){
    const apiUrl = process.env.API_URL;
    try {
        const proveedores = await axios.get(`${apiUrl}/api/proveedores`)
        return proveedores.data;
        
    } catch (error) {
        console.log("Error cargando usuarios",error)        
    }
  
  }
  

async function RegisterInsumosPage() {
    const {proveedores} = await getProveedores();
    //ordenar arreglo de proveedores
    proveedores.sort((a,b) => a.nombre.localeCompare(b.nombre))
    console.log(proveedores)
    
    
    const medidasData = [
        { id: 1, nombre: 'mililitros', abreviatura: 'ml' },
        { id: 2, nombre: 'gramos', abreviatura: 'gr' },
        { id: 3, nombre: 'kilogramos', abreviatura: 'kg' },
        { id: 4, nombre: 'litros', abreviatura: 'l' },
        { id: 5, nombre: 'piezas', abreviatura: 'pz' },
        { id: 6, nombre: 'metros cubicos', abreviatura: 'm3' },
      ];
      
    return (
        <div>
            <InsumosForm proveedores={proveedores} medidas={medidasData}/>
        </div>
    )
}

export default RegisterInsumosPage