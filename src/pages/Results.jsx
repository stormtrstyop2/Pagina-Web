import React from "react";
import data from "../data/data.json";
import Cards from "../components/Cards";
import { useNavigate } from "react-router-dom";

const calcularCantidad = (w) => {
  let resultados = localStorage.getItem("q");
  resultados = JSON.parse(resultados);
  let resultadoLista = Object.values(resultados);
  let resultadoFilter = resultadoLista.filter((word) => word === w);
  return resultadoFilter.length;
};

const Results = () => {
  const navigate = useNavigate();
  const resultsList = [
    { w: "A", n: calcularCantidad("A") },
    { w: "B", n: calcularCantidad("B") },
    { w: "C", n: calcularCantidad("C") },
    { w: "D", n: calcularCantidad("D") },
  ];

  resultsList.sort((a, b) => (a.n > b.n ? -1 : 1));
  const carrerasCoinciden = data.results.filter(
    (el) => el.word === resultsList[0].w
  )[0];

  return (
    <div className="w-full">
      <h1 className="text-center font-bold text-4xl text-orange-600 mb-4">
        Resultados
      </h1>
      {/* Vista de opciones  */}
      {/* <div className="w-10/12 m-auto">
        {resultsList.map((el) => (
          <ResultsWords w={el.w} n={el.n} key={el.w} />
        ))}
      </div> */}
      <div className="w-10/12 m-auto">
        <div className="px-4">
          <h3 className="text-cyan-500 font-bold text-left sm:text-2xl text-xl mt-5 mb-4">
            {carrerasCoinciden.description}
          </h3>
        </div>
        <ul className="list-disc">
          <div className="w-full px-2 mx-auto sm:flex sm:justify-around sm:items-stretch flex-wrap">
            {carrerasCoinciden.items.map((el, i) => (
              <Cards
                key={i}
                photo={el.img}
                descripcion={el.description}
                tittle={el.title}
                labels={el.labels}
              />
            ))}
          </div>
        </ul>
      </div>
      <button
        className="bg-emerald-600  hover:bg-emerald-700 rounded p-4 mt-4 mb-8 text-white m-auto block"
        onClick={() => navigate("/questions")}
      >
        Volver a presentar test
      </button>
    </div>
  );
};

// Opciones muestreo de resultados
/* const ResultsWords = ({ w, n }) => (
  <div className="flex items-center justify-around">
    <span className="text-3xl font-semibold text-orange-500">{w}</span>
    <div className="w-5/12 h-2 bg-orange-400 rounded"></div>
    <span className="text-3xl font-semibold text-orange-500 w-5">{n}</span>
  </div>
); */

export default Results;
