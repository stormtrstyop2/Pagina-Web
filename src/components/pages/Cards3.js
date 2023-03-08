function Cards3({ photo, card }) {
  return (
    <div className={(card = 2)}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-auto" src={photo} alt="" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Ing. Bioquimica</div>
          <p className="text-gray-700 text-base">
            Formar profesionales capaces de resolver problemáticas de la
            industria regional, estatal y nacional, con sentido crítico,
            aplicando los principios y métodos de la Ingeniería Bioquímica para
            el aprovechamiento racional e integral de los recursos bióticos, en
            la producción de bienes y servicios que contribuyan a elevar el
            nivel de vida de la sociedad.
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

export default Cards3;
