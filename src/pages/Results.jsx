import React from 'react'
import data from "../data/data.json"
import { useNavigate } from 'react-router-dom';

const calcularCantidad = (w) => {
  let resultados = localStorage.getItem("q");
  resultados = JSON.parse(resultados);
  let resultadoLista = Object.values(resultados);
  let resultadoFilter =  resultadoLista.filter(word => word === w);
  return resultadoFilter.length;
} 

const Results = () => {
  const navigate = useNavigate()
  const resultsList = [{w: "A", n: calcularCantidad("A")}, {w: "B", n: calcularCantidad("B")}, {w: "C", n: calcularCantidad("C")}, {w: "D", n: calcularCantidad("D")}];
  resultsList.sort((a,b) => a.n>b.n ? -1 : 1)
  const carrerasCoinciden = data.results.filter(el => el.word === resultsList[0].w)[0];
  return (
    <div className='w-full'>
      <h1 className='text-center font-bold text-4xl text-orange-600 mb-4'>Resultados</h1>
      <div className='w-10/12 m-auto'>
        {resultsList.map(el => <ResultsWords w={el.w} n={el.n} key={el.w}/>)}
      </div>
      <div className='w-10/12 m-auto'>
      <h3 className='text-cyan-500 font-semibold text-center text-lg mt-5'>{carrerasCoinciden.description}</h3>
      <ul className='list-disc'>

      {carrerasCoinciden.items.map((el, i) => 
      <li className='w-10/12' key={i}>
        <p className='font-medium'>{el.item}</p>
        <div className='w-9/12 bg-cyan-50 bg-opacity-25 p-2 rounded-lg'>
        <img src={el.imagen} alt="carrera"  className='w-full h-full rounded-lg'/>
        </div>
      </li>
        )}
        </ul>
      </div>
      <button className="bg-emerald-600 rounded p-2 mt-4 text-white m-auto block" onClick={() => navigate("/questions")}>Volver a presentar test</button>
      <h1 className='text-center  text-purple-800 font-bold text-5xl mt-5'>Excelente!!</h1>
    </div>
  )
}

const ResultsWords = ({w, n}) => <div className='flex items-center justify-around'>
          <span className='text-3xl font-semibold text-orange-500'>{w}</span>
          <div className='w-5/12 h-2 bg-orange-400 rounded'></div>
          <span className='text-3xl font-semibold text-orange-500 w-5'>{n}</span>
        </div>;

export default Results