import React from "react";
import Cards6 from "./components/pages/Card6";
import Cards from "./components/pages/Cards";
import Cards2 from "./components/pages/Cards2";
import Cards3 from "./components/pages/Cards3";
import Cards4 from "./components/pages/Cards4";
import Cards5 from "./components/pages/Cards5";
import Cards7 from "./components/pages/Cards7";

function App() {
  return (
    <div className="bg-gray-400 w-full min-h-screen">
      <div className="p-4 bg-gray-500 text-gray-400">
        <h4 className="text-2xl uppercase text-center text-black">
          ¿Cúanto sabes sobre tu carrera?
        </h4>
      </div>
      <div className=" container mx-auto mt-5">
        <div className="flex -mx-2 flex-wrap">
          <div className="w-full sm:w-1/2 md:w-1/3 px-2">
            <Cards photo="https://picsum.photos/510/500" />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 px-2">
            <Cards2 photo="https://picsum.photos/510/500" />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 px-2">
            <Cards3 photo="https://picsum.photos/510/500" />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 px-2">
            <Cards3 photo="https://picsum.photos/510/500" />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 px-2">
            <Cards4 photo="https://picsum.photos/510/500" />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 px-2">
            <Cards5 photo="https://picsum.photos/510/500" />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 px-2">
            <Cards6 photo="https://picsum.photos/510/500" />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 px-2">
            <Cards7 photo="https://picsum.photos/510/500" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
