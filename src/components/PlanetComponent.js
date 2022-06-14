import React, {useState} from "react"
import '../index.css'
import '../styles/planet.css'
import '../styles/factbox.css'
import data from "../../data.json"
import {useParams} from "react-router-dom"
import FactBox from "./FactBox"

function PlanetComponent(){
  // const [img, setImg] = (`../assets/planet-${thisPlanet.name.toLowerCase()}.svg`)  
  const {planetName} = useParams()
  const thisPlanet = data.find(planet => planet.name === planetName)
  function loadImage(imgName){

  }  
  return(
    <div className="planet-page">
      <div className="planet-container">
        <div className="planet-img">
          <img src={require(`../assets/planet-${thisPlanet.name.toLowerCase()}.svg`).default}/>
        </div>

        <div className="planet-info">

        <div className="planet-info-main">
          <h1>{thisPlanet.name.toUpperCase()}</h1>
          <p>{thisPlanet.overview.content}</p>
          <div className="source-info">
            <p>Source:</p>
            <a href={thisPlanet.overview.source}>Wikipedia</a>
            <img src={require(`../assets/icon-source.svg`).default}/> 
          </div>
        </div>

        <div className="planet-buttons">
          <div className="interactive-button-container" onClick={() => loadImage()}>
            <p className="num">01</p>
            <p>overview</p>  
          </div>
          <div className="interactive-button-container">
            <p className="num">02</p>
            <p>internal structure</p>  
          </div>
          <div className="interactive-button-container">
            <p className="num">03</p>
            <p>surface geology</p>  
          </div>
        </div>
              
      </div>
    </div>
    <div className="factbox-main">
      <FactBox title={"rotation time"} data={thisPlanet.rotation}/>
      <FactBox title={"revolution time"} data={thisPlanet.revolution}/>
      <FactBox title={"radius"} data={thisPlanet.radius}/>
      <FactBox title={"temperature"} data={thisPlanet.temperature}/>
      </div>
    </div>
        
  )
}
export default PlanetComponent