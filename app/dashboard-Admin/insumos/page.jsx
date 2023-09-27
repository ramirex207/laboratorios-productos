import InsumosForm from '@components/insumos/InsumosForm';
import InsumosView from '@components/insumos/InsumosView';

async function getInsumos(){
  const apiUrl = process.env.API_URL;
  try {
    const res = await fetch(`${apiUrl}/api/insumos`, {
      method: 'GET',
      cache: 'no-store',
    });
    if(!res.ok){
      throw new Error(res.status)
    }
    const data = await res.json();

    return data;
  } catch (error) {
    console.log("Error cargando insumos",error)
  }
}
async function getProvidersName(){
    const apiUrl = process.env.API_URL;
    try {
      const res = await fetch(`${apiUrl}/api/proveedores`, {
        method: 'GET',
        cache: 'no-store',
      });
      if(!res.ok){
        throw new Error(res.status)
      }
      const data = await res.json();
     const allProviders = data.proveedores     
      const filteredUsers = allProviders.filter(proveedor => proveedor.nombre === 'ramiro');
      return filteredUsers;
    } catch (error) {
      console.log("Error cargando usuarios",error)
    }
  }


async function InsumosPage() {
  const {insumos} = await getInsumos();
  const {proveedores} = await getProvidersName();
  console.log(proveedores)
  
  return (
    <div>
        <InsumosView insumos={insumos} proveedores={proveedores}/>
    </div>
  )
}

export default InsumosPage