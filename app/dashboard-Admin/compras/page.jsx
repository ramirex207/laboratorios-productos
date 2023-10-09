import ComprasView from '@components/compras/ComprasView'

async function getInsumos(){
    const apiUrl = process.env.API_URL;
    try {
      const res = await fetch(`${apiUrl}/api/insumos/compra`, {
        method: 'GET',
        cache: 'no-store',
      });
      if(!res.ok){
        throw new Error(res.status)
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.log("Error cargando datos de la compra",error)
    }
  
  }
  
  

async function ComprasPage() {
    const {compras} = await getInsumos();
    compras.sort((a, b) => new Date(a.fecha_requerida) - new Date(b.fecha_requerida));
    console.log(compras)

  return (
    <div>ComprasPage
       <ComprasView compras={compras}/> 
    </div>
    
  )
}

export default ComprasPage