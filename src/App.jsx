import React from "react";
import SwitchTheme from "./components/SwitchTheme";
import Rutas from "./Rutas";
import Theme from "./providers/Theme";

function App() {
  return (
    <Theme>
      <div className="sm:w-1/2 m-auto"> 
      <SwitchTheme/>
      <Rutas/>
      </div>
        {/* cuerpo "texto" */}
        
        {/* cartas */}
        {/*<div className="container mx-auto mt-5 pt-4">
        <div className="flex -mx-2 flex-wrap">
          <div className="w-full sm:w-1/2 md:w-1/3 px-2 ">
            <Cards
              photo="https://global.tiffin.edu/img/article/habilidades-ingeniero-sistemas-computacionales.webp"
              desciption="Formar profesionistas de calidad con capacidad analítica, critica,
            creativa y de liderazgo, que aporten soluciones computacionales
            tecnológicas, innovadoras con un alto nivel de sensibilidad social,
            y valores éticos aplicados a las tecnologías de información y de
            comunicación."
              tittle="Ing. En Sistemas Computacionales"
              label1="#Dev"
              label2="#S.O"
              label3="#Pensamiento lógico"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 px-2 ">
            <Cards
              photo="https://i.ytimg.com/vi/e7T8TPrbfdU/maxresdefault.jpg"
              desciption="Formar profesionistas con carácter científico e innovadores de
            tecnologías, capaces de integrar y dirigir equipos
            multidisciplinarios para resolver problemas ambientales y generar
            conocimientos que aseguren los servicios ecosistémicos y el
            bienestar de la población con un sentido de equidad y justicia."
              tittle="Ing. Ambiental"
              label1="#Ética ambiental"
              label2="#Recursos naturales"
              label3="#Reciclaje"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 px-2 ">
            <Cards
              photo="https://infolibros.org/wp-content/uploads/2021/10/Libros-de-Ingenieria-Bioquimica.jpg"
              desciption="Es una ciencia y una tecnología encargada de transformar y en su caso
          purificar, materiales de origen biológico útiles para el hombre
          primordialmente a escalas industriales, ofreciendo siempre una
          atractiva relación costo-beneficio, buscando un impacto negativo
          mínimo al medio ambiente."
              tittle="Ing. Bioquimica"
              label1="#Genética"
              label2="#Alcalinos"
              label3="#Bioquímica"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 px-2 ">
            <Cards
              photo="https://www.queestudiar.org/wp-content/uploads/2019/05/inge-640x300.jpg"
              desciption="El Instituto Tecnológico superior de los Ríos tiene como misión el
            Formar ingenieros civiles con una alta competencia capaz de generar
            alternativas eficientes de solución a las necesidades de
            infraestructura pública y privada que contribuya con pertinencia al
            desarrollo sustentable de la región."
              tittle="Ing. Civil"
              label1=""
              label2=""
              label3=""
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 px-2 ">
            <Cards
              photo="https://www.carreras.unse.edu.ar/wp-content/uploads/2020/09/bfe401e406390e9f6b82c7a6f1fbc5c7.png"
              desciption="Formar ingenieros electromecánicos capaces de innovar y adaptarse a
            los desafíos de medio tecnológico, respetando los valores éticos y
            con vocación de servicio a la sociedad. Que contribuyan al
            desarrollo de la región y el país; mediante la generación, e
            innovación de tecnologías y difusión de conocimientos en los campos
            de la ingeniería electromecánica."
              tittle="Ing. Electromecanica"
              label1=""
              label2=""
              label3=""
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 px-2 ">
            <Cards
              photo="https://utec.edu.pe/sites/default/files/blog/que_hace_un_ingeniero_industrial_en_una_empresa.jpg"
              desciption="Formar Ingenieros industriales con habilidades científicas
            creativas, humanísticas, emprendedoras y tecnológicas que
            contribuyan al desarrollo de la calidad y productividad con un
            enfoque sustentable del sector industrial."
              tittle="Ing. Industrial"
              label1=""
              label2=""
              label3=""
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 px-2 ">
            <Cards
              photo="https://info.marista.edu.mx/hubfs/blog%20img/Imágenes%20Blog/unversidad-marista-licenciatura-en-administracion-cual-es-el-campo-laboral.jpg"
              desciption=" Formar profesionistas en Administración con capacidad de tomar
            decisiones, innovar y analizar los factores económicos, sociales,
            políticos, culturales, ambientales y tecnológicos, generando
            soluciones para los organismos públicos, privados y sociales; todo
            esto dentro de un marco de valores éticos y humanísticos."
              tittle="Lic. En Administración"
              label1=""
              label2=""
              label3=""
            />
          </div>
        </div>
      </div>*/}
    </Theme>
  );
}

export default App;
