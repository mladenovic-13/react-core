import { createContext } from "react";

// define default value for ThemeContext
// usefull for TypeScript
const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;
