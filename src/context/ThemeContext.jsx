import {
createContext,
useState,
useEffect,
} from "react";

export const ThemeContext =
createContext();

export function ThemeProvider({
children,
}) {
const [darkMode, setDarkMode] =
useState(false);

useEffect(() => {
const savedTheme =
localStorage.getItem(
"darkMode"
);


if (savedTheme) {
  setDarkMode(
    JSON.parse(savedTheme)
  );
}


}, []);

useEffect(() => {
localStorage.setItem(
"darkMode",
JSON.stringify(
darkMode
)
);


if (darkMode) {
  document.body.classList.add(
    "bg-gray-900",
    "text-white"
  );
} else {
  document.body.classList.remove(
    "bg-gray-900",
    "text-white"
  );
}


}, [darkMode]);

const toggleTheme = () => {
setDarkMode(
!darkMode
);
};

return (
<ThemeContext.Provider
value={{
darkMode,
toggleTheme,
}}
>
{children}
</ThemeContext.Provider>
);
}
