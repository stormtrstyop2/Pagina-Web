import { useContext, useState } from "react";
import { ThemeContext } from "../providers/Theme";
import luna from "../assets/img/luna.svg";
import sol from "../assets/img/sol.svg";

const SwitchTheme = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const [mov, setMov] = useState(theme === "dark");

  const switchClick = () => {
    if (mov) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    setMov(!mov);
  };

  return (
    <div>
      <div
        id="contenedor"
        className={`w-12 h-6 border rounded-full mt-4 flex p-0 bg-slate-500 opacity-0.5 ${
          mov ? "justify-start" : "justify-end"
        }`}
        onClick={() => switchClick()}
      >
        <div
          id="interruptor"
          className={`w-6 h-full rounded-full m-0 flex justify-center items-center ${
            mov ? "bg-white" : "bg-slate-600"
          }`}
        >
          {mov ? (
            <img src={luna} alt="icon" className="w-1/2" />
          ) : (
            <img src={sol} alt="icon" className="w-1/2" />
          )}
        </div>
      </div>
    </div>
  );
};

export default SwitchTheme;
