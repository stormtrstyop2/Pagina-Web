import { useState } from 'react'
import Question from '../components/Question'
import data from "../data/data.json"

const Questions = () => {
const [contador, setContador] = useState(0)
const backQuestion = () => setContador(contador-1)
  return (
    <>
    <div className='flex w-full mt-5 text-lg '>
    <div className='m-auto w-10/12'>
    <div className='font-semibold mb-5'>{data.reto}</div>
    {data.questions.map(el => <Question key={el.id} q={el} contador={contador} setContador={setContador}/>)}
    </div>
  
    </div>  
    {contador > 0 && <button className="bg-emerald-600 rounded p-2 mt-4 ml-4 text-white hover:bg-emerald-700" onClick={backQuestion}>Regresar</button>}
    </>
  )
}


export default Questions