import InsumosView from '@components/insumos/InsumosView';

async function getInsumos() {
  const apiUrl = process.env.API_URL;
  try {
    const res = await fetch(`${apiUrl}/api/insumos`, {
      method: 'GET',
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error(`Error de respuesta: ${res.status}`);
    }
    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error cargando insumos:", error);
    return { insumos: [] }; // Devuelve un objeto con una propiedad insumos vacía en caso de error.
  }
}

async function InsumosPage() {
  const { insumos } = await getInsumos();

  if (!insumos) {
    return (
      <div>
        <p>No se pudieron cargar los insumos.</p>
      </div>
    );
  }

  return (
    <div>
      <InsumosView insumos={insumos} />
    </div>
  );
}

export default InsumosPage;
