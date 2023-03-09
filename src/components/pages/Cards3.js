function Cards3({ photo, card }) {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <img className="w-auto" src={photo} alt="" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Ing. Bioquimica</div>
        <p className="text-gray-700 text-base">
          Es una ciencia y una tecnología encargada de transformar y en su caso
          purificar, materiales de origen biológico útiles para el hombre
          primordialmente a escalas industriales, ofreciendo siempre una
          atractiva relación costo-beneficio, buscando un impacto negativo
          mínimo al medio ambiente
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
  );
}

export default Cards3;
