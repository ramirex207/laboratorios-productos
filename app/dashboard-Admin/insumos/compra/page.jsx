import CompraForm from "@components/insumos/CompraForm"
import { getServerSession } from "next-auth";


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

  

async function CompraPage(req) {
  const {user} = await getServerSession({req});
  console.log(user)
  const {insumos} = await getInsumos();
  insumos.sort((a, b) => a.nombre.localeCompare(b.nombre));
 // console.log(insumos)
    return (
        <div>
          <CompraForm ingredientes={insumos} user={user}/>
                  
        </div>
    )
}

export default CompraPage