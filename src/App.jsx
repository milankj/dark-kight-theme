import React,{useState} from "react"
import Navbar from "./components/Navbar"
import Content from "./components/Content"

export default function App() {

    const [darkMode,setDarkMode] = useState(false)
    const toggleDarkMode = ()=>{
        setDarkMode(prevState=>!prevState)
    }
    console.log(darkMode)
    return (
        <div className="container">
            <Navbar 
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            />
            <Content 
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            />
        </div>
    )
}