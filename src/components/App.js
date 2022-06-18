import React, {useRef} from "react"
import {Link, Routes, Route} from 'react-router-dom'
import '../index.css'
import img from '../assets/geology-earth.png';
import data from "../../data.json"
import PlanetComponent from "./PlanetComponent";
import Header from "./Header";

function App(){
  const body = useRef()
  console.log(body.current)
    return(
        <div ref={body}>
          <Header/>  
        </div>
        
    )
}
export default App