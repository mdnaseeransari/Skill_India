import Navbar from "../component/Navbar"
import { useState,useEffect } from "react";


function App() {
  const [theme, setTheme] = useState("bg-primary");

  useEffect(() => {
    document.body.className = theme;  // apply light or dark to <body>
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      
    </>
  )
}

export default App
