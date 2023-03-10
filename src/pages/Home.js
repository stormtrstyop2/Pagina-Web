import data from "../data/data.json";
function Home() {
  return (
    <div>
      <h1 className="">¿Qué áreas te interesan?</h1>
      <div className="pt-4">
        <button className="border border-cyan-500 rounded p-2 text-cyan-500">
          Comenzar test
        </button>
      </div>
      <div className="pt-4">
        <p>{data.subtitle}</p>
      </div>
    </div>
  );
}

export default Home;
