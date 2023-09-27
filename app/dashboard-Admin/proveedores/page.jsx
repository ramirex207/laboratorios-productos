import ProvidersView from "@components/proveedores/ProvidersView";

async function getUsers(){
  const apiUrl = process.env.API_URL;
  try {
    const res = await fetch(`${apiUrl}/api/user`, {
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
  const {Users} = await getUsers();
 // console.log(Users)
  return (
    <div>
        <ProvidersView proveedores={Users}/>
    </div>
  )
}

export default ProveedoresPage