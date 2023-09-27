import ProvidersForm from '@components/proveedores/ProvidersForm'
import ProvidersView from '@components/proveedores/ProvidersView';

async function getUsers(){
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
    return data;
  } catch (error) {
    console.log("Error cargando usuarios",error)
  }
}

async function ProveedoresPage() {
  const {proveedores} = await getUsers();
  //console.log(proveedores)
  return (
    <div>
        <ProvidersView proveedores={proveedores}/>
        <ProvidersForm/>
    </div>
  )
}

export default ProveedoresPage