import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import { LightMode, DarkMode } from "@mui/icons-material";

function ThemeSwitcher() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.querySelector("body").setAttribute("data-theme", theme);
    
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <IconButton onClick={handleChangeTheme} color="inherit">
      {theme === "light" ? <DarkMode sx={{color:'var(--app-blue)'}}  /> : <LightMode sx={{color:'var(--app-blue)'}} />}
    </IconButton>
  );
}

export default ThemeSwitcher;
