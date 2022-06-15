import React from "react"
import {Link, Routes, Route} from 'react-router-dom'
import '../index.css'
import img from '../assets/geology-earth.png';
import data from "../../data.json"
import PlanetComponent from "./PlanetComponent";
import Header from "./Header";

function App(){
    return(
       
        <div>
          <Header/>  
        </div>
        
    )
}
export default App