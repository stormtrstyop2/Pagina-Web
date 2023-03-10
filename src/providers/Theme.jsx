import { createContext, useState } from "react";

const themeDark = {
  backgroundColor: "#334155",
  color: "#fff",
};

const themeLight = {
  backgroundColor: "#fff",
  color: "#000",
};

let localTheme = localStorage.getItem("theme") || "dark";

const Theme = ({ children }) => {
  const [theme, setTheme] = useState(localTheme);

  const themeSelect = theme === "dark" ? themeDark : themeLight;
  const changeTheme = (t) => {
    localStorage.setItem("theme", t);
    setTheme(t);
  };

  document.body.style.backgroundColor = themeSelect.backgroundColor;
  document.body.style.color = themeSelect.color;

  return (
    <ThemeContext.Provider value={[theme, changeTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeContext = createContext(null);
export default Theme;
