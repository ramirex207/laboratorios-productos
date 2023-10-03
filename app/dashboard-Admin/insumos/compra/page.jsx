import CompraForm from "@components/insumos/CompraForm"


async function getInsumos(){
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
  

function CompraPage() {
    //const {Users} = getInsumos();
    //console.log(Users)
    return (
        <div>
            <CompraForm/>
        </div>
    )
}

export default CompraPage