function Cards7({ photo }) {
  return (
    <div className="card">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-auto" src={photo} alt="" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Lic. En Administración</div>
          <p className="text-gray-700 text-base">
            Formar profesionistas en Administración con capacidad de tomar
            decisiones, innovar y analizar los factores económicos, sociales,
            políticos, culturales, ambientales y tecnológicos, generando
            soluciones para los organismos públicos, privados y sociales; todo
            esto dentro de un marco de valores éticos y humanísticos.
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #Dev
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #intuitivo
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            #Pensamiento lógico
          </span>
        </div>
      </div>
    </div>
  );
}

export default Cards7;
