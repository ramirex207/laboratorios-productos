import BtnAgregarInsumo from "@components/insumos/BtnAgregarInsumo";
import BtnSolicitudCompra from "@components/insumos/BtnSolicitudCompra";
import InsumosView from "@components/insumos/InsumosView";

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
    console.log("Error cargando usuarios",error)
  }

}



async function InsumosPage() {
  const {insumos} = await getInsumos();
  insumos.sort((a, b) => a.nombre.localeCompare(b.nombre));
  
  return (
    <div>
      <div className="flex mx-2">
        <BtnAgregarInsumo/>
        <BtnSolicitudCompra/>

      </div>
      
      <InsumosView insumos={insumos}/>
    </div>
  );
}

export default InsumosPage;
