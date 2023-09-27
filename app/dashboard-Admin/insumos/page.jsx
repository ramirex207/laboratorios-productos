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


async function InsumosPage() {
  const {insumos} = await getInsumos();
  //console.log(insumos)
  
  return (
    <div>
        <InsumosView insumos={insumos}/>
        <InsumosForm/>
    </div>
  )
}

export default InsumosPage