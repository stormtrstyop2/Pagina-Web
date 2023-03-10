function Cards({ photo, tittle, desciption, label1, label2, label3 }) {
  return (
    <div className="card">
      <div className=" rounded overflow-hidden shadow-lg">
        <img className="w-auto" src={photo} alt="" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{tittle}</div>
          <p className="text-gray-700 text-base">{desciption}</p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {label1}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {label2}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            {label3}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Cards;
