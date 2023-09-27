
function Contact() {
  return (
    <div className="flex items-center min-h-[80vh]">
      <div className="max-w-7xl mx-auto">
        {/* Fila 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Columna 1 */}
          <div className="col-span-1 md:col-span-3 text-center ">
            <h1 className="text-4xl mb-4 text-slate-800 font-thin italic">Vamasol Srl</h1>
            <p className="text-lg mb-4 text-slate-700">Bienvenido al Laboratorio Innovador de Insumos Médicos, donde la ciencia y la innovación se unen para ofrecer soluciones de vanguardia en el campo de la atención médica. Nos enorgullece presentar una gama completa de insumos médicos de alta calidad basados en soluciones ácidas y bases, diseñados para satisfacer las necesidades más exigentes de los profesionales de la salud y mejorar la vida de los pacientes.</p>
            <p className="text-lg mb-4 text-slate-700">Ubicada en Av. 16 de Julio Número 45, La Paz, Bolivia</p>
            <p className="text-lg text-slate-900">Teléfono: 71578126</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
