


function AboutPage() {
  return (
    <div className=" text-slate-900 mt-24 h-screen">
      <div className="mx-auto">

        {/* Fila 1 */}
        <div className="grid grid-cols-1 items-center">
          <div className="col-span-1 text-center">
            
            <h1 className="text-4xl font-bold pb-2 mb-4 text-black border-black border-b-2 max-w-xs mx-auto">Nuestros Servicios</h1>
          </div>
        </div>

        {/* Fila 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 items-center">
          <div className="col-span-1 text-center">
            <h2 className="text-xl font-bold mb-4">Nuestra Misión</h2>
            <p>Nuestra misión es clara: proporcionar productos médicos de calidad que marquen la diferencia en el diagnóstico, tratamiento y cuidado de los pacientes. Nos esforzamos por liderar el mercado con soluciones avanzadas, manteniendo los más altos estándares de calidad y seguridad en cada uno de nuestros productos.</p>
          </div>

          <div className="col-span-1 text-center">
            <h2 className="text-xl font-bold mb-4">Expertos en Soluciones Ácidas y Bases</h2>
            <p>Bienvenido al Laboratorio Innovador de Insumos Médicos, donde la ciencia y la innovación se unen para ofrecer soluciones de vanguardia en el campo de la atención médica. Nos enorgullece presentar una gama completa de insumos médicos de alta calidad basados en soluciones ácidas y bases, diseñados para satisfacer las necesidades más exigentes de los profesionales de la salud y mejorar la vida de los pacientes.</p>
          </div>

          <div className="col-span-1 text-center">
            <h2 className="text-xl font-bold mb-4">Compromiso con la Innovación</h2>
            <p>En Laboratorios Vamasol SRL, la innovación es el corazón de todo lo que hacemos. Nuestro equipo de científicos y expertos en el campo trabaja incansablemente para desarrollar soluciones ácidas y bases de última generación que cumplan con las demandas cambiantes de la medicina moderna. Estamos comprometidos con la investigación constante y la mejora continua para ofrecer productos que reflejen los últimos avances científicos.</p>
          </div>
        </div>

        {/* Fila 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 items-center">
          <div className="col-span-1 text-center">
            <h2 className="text-xl font-bold mb-4">Amplia Gama de Productos</h2>
            <p>Desde reactivos de laboratorio hasta dispositivos médicos especializados, nuestro catálogo de productos abarca una amplia variedad de aplicaciones en el ámbito médico y de diagnóstico. Cada producto que fabricamos está respaldado por rigurosos controles de calidad y pruebas exhaustivas para garantizar su eficacia y seguridad.</p>
          </div>

          <div className="col-span-1 text-center">
            <h2 className="text-xl font-bold mb-4">Colaboración y Asociación</h2>
            <p>Valoramos la colaboración con profesionales de la salud, instituciones médicas y empresas del sector. Trabajamos estrechamente con nuestros socios para comprender sus necesidades únicas y desarrollar soluciones personalizadas que contribuyan a la excelencia en la atención médica</p>
          </div>

          <div className="col-span-1 text-center">
            <h2 className="text-xl font-bold mb-4">Sostenibilidad y Responsabilidad Social</h2>
            <p>Además de nuestro compromiso con la calidad y la innovación, también nos preocupamos profundamente por el medio ambiente y la comunidad. Nuestro enfoque en prácticas sostenibles y responsabilidad social empresarial refleja nuestro deseo de contribuir positivamente al mundo que nos rodea.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AboutPage;