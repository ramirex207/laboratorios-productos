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
    
      return data;
    } catch (error) {
      console.log("Error cargando usuarios",error)
    }
  }


async function InsumosPage() {
  const {insumos} = await getInsumos();
  const provider = await getProvidersName();
  //console.log(provider)
  
  return (
    <div>
        <InsumosView insumos={insumos} proveedor={provider}/>
        <InsumosForm/>
    </div>
  )
}

export default InsumosPage