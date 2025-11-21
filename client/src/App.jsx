import Navbar from "../component/Navbar"
import { useState,useEffect } from "react";


function App() {
  const [theme, setTheme] = useState("dark-mode")

   useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  

  return (
    <>

        <Navbar theme={theme} setTheme={setTheme} />
     
      
    </>
  )
}

export default App
