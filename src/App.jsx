import React from "react";
import Cards from "./components/pages/Cards";
import Cards2 from "./components/pages/Cards2";
import Cards3 from "./components/pages/Cards3";
import Cards4 from "./components/pages/Cards4";
import Cards5 from "./components/pages/Cards5";
import Cards6 from "./components/pages/Card6";
import Cards7 from "./components/pages/Cards7";
import Body from "./components/pages/Body";
import Data from "./servicios/data.json";
function App() {
  console.log(Data);

  return (
    <main className="bg-gray-300 w-full min-h-screen">
      <div className="p-4 bg-blue-400">
        <h4 className="text-2xl uppercase text-center text-black">
          ¿Cúanto sabes sobre tu carrera?
        </h4>
      </div>
      <div className="text-center font-medium text-2xl container mx-auto mt-5">
        <Body />
      </div>
      <div className="container mx-auto mt-5 ">
        <div className="flex -mx-2 flex-wrap">
          <div className="w-full sm:w-1/2 md:w-1/3 px-2 ">
            <Cards photo="https://global.tiffin.edu/img/article/habilidades-ingeniero-sistemas-computacionales.webp" />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 px-2">
            <Cards2 photo="https://i.ytimg.com/vi/e7T8TPrbfdU/maxresdefault.jpg" />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 px-2">
            <Cards3 photo="https://infolibros.org/wp-content/uploads/2021/10/Libros-de-Ingenieria-Bioquimica.jpg" />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 px-2">
            <Cards4 photo="https://www.queestudiar.org/wp-content/uploads/2019/05/inge-640x300.jpg" />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 px-2">
            <Cards5 photo="https://www.carreras.unse.edu.ar/wp-content/uploads/2020/09/bfe401e406390e9f6b82c7a6f1fbc5c7.png" />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 px-2">
            <Cards6 photo="https://mexico.anahuac.mx/hubfs/website/licenciaturas/__Ingeniería%20Industrial%20para%20la%20Dirección-.svg" />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 px-2">
            <Cards7 photo="https://info.marista.edu.mx/hubfs/blog%20img/Imágenes%20Blog/unversidad-marista-licenciatura-en-administracion-cual-es-el-campo-laboral.jpg" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
