import { useContext } from "react";
import { ThemeContext } from "../providers/Theme";
function Cards({ photo, tittle, descripcion, labels }) {
  const [theme] = useContext(ThemeContext);
  return (
    <div className="mb-4 sm:m-2">
      <div className="rounded-xl shadow-xl">
        <img className="rounded-t-xl w-full" src={photo} alt="-" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{tittle}</div>
          <p className={theme === "dark" ? "text-gray-100" : "text-gray-700"}>
            {descripcion}
          </p>
        </div>
        <div className="px-6 py-4 flex content-center gap-2 flex-wrap justify-start">
          {labels.map((label, i) => (
            <div
              className="inline-block bg-gray-200 rounded-full flex text-sm font-semibold text-gray-700 p-1"
              key={i}
            >
              <span className="m-auto">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;
