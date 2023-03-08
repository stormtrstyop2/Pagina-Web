function Cards5({ photo }) {
  return (
    <div className="card">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-auto" src={photo} alt="" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Ing. Electromecanica</div>
          <p className="text-gray-700 text-base">
            Formar ingenieros electromecánicos capaces de innovar y adaptarse a
            los desafíos de medio tecnológico, respetando los valores éticos y
            con vocación de servicio a la sociedad. Que contribuyan al
            desarrollo de la región y el país; mediante la generación, e
            innovación de tecnologías y difusión de conocimientos en los campos
            de la ingeniería electromecánica.
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

export default Cards5;
