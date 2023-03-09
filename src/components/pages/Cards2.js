function Cards2({ photo }) {
  return (
    <div className="card">
      <div className=" rounded overflow-hidden shadow-lg">
        <img className="w-auto" src={photo} alt="" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Ing. Ambiental</div>
          <p className="text-gray-700 text-base">
            Formar profesionistas con carácter científico e innovadores de
            tecnologías, capaces de integrar y dirigir equipos
            multidisciplinarios para resolver problemas ambientales y generar
            conocimientos que aseguren los servicios ecosistémicos y el
            bienestar de la población con un sentido de equidad y justicia.
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

export default Cards2;
