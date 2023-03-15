import data from "../data/data.json";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const questions = () => setTimeout(() => navigate("/questions"), 100) 
  return (
    <div className="w-full mt-24 flex">

    <div className="m-auto w-10/12">
      <h1 className="text-center text-2xl font-bold">¿Qué áreas te interesan?</h1>
      <div className="pt-4">
        <button className="border border-cyan-500 rounded p-2 text-cyan-500 block m-auto hover:bg-cyan-200 select:bg-cyan-200" onClick={questions}>
          Comenzar test
        </button>
      </div>
      <div className="pt-4 font-medium text-lg">
        <p>{data.subtitle}</p>
      </div>
    </div>
    </div>
  );
}

export default Home;
