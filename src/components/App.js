import React from "react"
import {Link, Routes, Route} from 'react-router-dom'
import '../index.css'
import img from '../assets/geology-earth.png';
import data from "../../data.json"
import PlanetComponent from "./PlanetComponent";
import Header from "./Header";

function App(){
    //setState for the array of planet objects
    
    
    /* create displayPlanet function that will take planetName as a parameter
       loop through planetArr and find a planet object that has the same name as planetName
       when found, return the object
    */
    return(
        //render PlanetComponent here and pass displayPlanet function to it
        <div>
          <Header/>  
        </div>
        
    )
}
export default App