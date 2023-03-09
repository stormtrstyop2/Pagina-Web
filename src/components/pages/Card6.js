function Cards6({ photo }) {
  return (
    <div className="card">
      <div className="rounded overflow-hidden shadow-lg">
        <img className="w-auto" src={photo} alt="" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Ing. Industrial</div>
          <p className="text-gray-700 text-base">
            Formar Ingenieros industriales con habilidades científicas
            creativas, humanísticas, emprendedoras y tecnológicas que
            contribuyan al desarrollo de la calidad y productividad con un
            enfoque sustentable del sector industrial.
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

export default Cards6;
