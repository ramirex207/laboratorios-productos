import ButtonAgregar from "@components/proveedores/ButtonAgregar";
import ProvidersView from "@components/proveedores/ProvidersView";

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
  proveedores.sort((a,b) => a.nombre.localeCompare(b.nombre))
  //console.log(proveedores)
  return (
    <div>
        <ButtonAgregar/>
        <ProvidersView proveedores={proveedores}/>
    </div>
  )
}

export default ProveedoresPage