import data from "../data/data.json"
import { useNavigate } from 'react-router-dom';

const Question = ({q, contador, setContador}) => {

  const navigate = useNavigate();
  
  const handleQuestion = (el) => {
    let localSaveResponse = localStorage.getItem("q");
    let result = {[q.id]: el.word}
    if(localSaveResponse){
      let convertToObj = JSON.parse(localSaveResponse);
      convertToObj[q.id] = el.word
      let convertToJson = JSON.stringify(convertToObj)
      localStorage.setItem("q", convertToJson)
    }else{
      let convertToJson = JSON.stringify(result)
      localStorage.setItem("q", convertToJson)
    }

    setTimeout(()=> {
      if(contador === data.questions.length -1){
        navigate("/results")
      }
      setContador(q.id)
    }, 150)
  }

    return q.id === contador + 1 && (<div>
        <p className='text-orange-600 font-semibold'>{q.id}{".- "}{q.question}</p>
        <div>
            {q.options.map(el => <button key={el.word} className='border border-2 rounded-2xl p-5 my-2 focus:border-orange-500 focus:text-orange-500 active:bg-orange-50 w-full text-left' onClick={() => handleQuestion(el)}>
            <span className='font-bold'>{el.word}{") "}</span>
            {el.content}
            </button>)}
        </div>
    </div>);
}

export default Question