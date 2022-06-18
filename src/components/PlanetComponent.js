import React, {useState, useRef} from "react"
import '../index.css'
import '../styles/planet.css'
import '../styles/factbox.css'
import data from "../../data.json"
import {useParams} from "react-router-dom"
import FactBox from "./FactBox"

function PlanetComponent(){
  const {planetName} = useParams()
  const imgRef1 = useRef()
  const imgRef2 = useRef()
  const imgRef3 = useRef()
  const pRef1 = useRef()
  const pRef2 = useRef()
  const pRef3 = useRef()
  const divRef1 = useRef()
  const divRef2 = useRef()
  const divRef3 = useRef()
  const thisPlanet = data.find(planet => planet.name === planetName)
  
  const imgBg = require('../assets/background-stars.svg').default
  const divStyle = {
    backgroundImage: `url(${imgBg})`,
    backgroundSize: 'cover'  
  }

  function loadImage(imgName){
    if(imgName === "main"){
      divRef1.current.className =  "interactive-btn active"
      divRef2.current.className =  "interactive-btn"
      divRef3.current.className =  "interactive-btn"
      imgRef1.current.className = "main-img"
      pRef1.current.className = "main-img"
      imgRef2.current.className = "secondary-img"
      pRef2.current.className = "secondary-img"
      imgRef3.current.className = "secondary-img"
      pRef3.current.className = "secondary-img"
    }else if(imgName === "internal"){
      divRef2.current.className =  "interactive-btn active"
      divRef1.current.className =  "interactive-btn"
      divRef3.current.className =  "interactive-btn"
      imgRef2.current.className = "main-img"
      pRef2.current.className = "main-img"
      imgRef1.current.className = "secondary-img"
      pRef1.current.className = "secondary-img"
      imgRef3.current.className = "secondary-img"
      pRef3.current.className = "secondary-img"
    }else if(imgName ==="geology"){ 
      divRef3.current.className =  "interactive-btn active"
      divRef2.current.className =  "interactive-btn"
      divRef1.current.className =  "interactive-btn"
      imgRef3.current.className = "main-img"
      pRef3.current.className = "main-img"
      imgRef1.current.className = "main-img"
      pRef1.current.className = "secondary-img"
      imgRef2.current.className = "secondary-img"
      pRef2.current.className = "secondary-img"

    }
 
  }  
  return(
    <div className="planet-page"  style={divStyle}>
      <div className="planet-container">
        <div className="planet-img">
          <div className="main--geology-container">
           <img src={require(`../assets/planet-${thisPlanet.name.toLowerCase()}.svg`).default} ref={imgRef1} className="main-img" alt="image of the planet"/>
           <img src={require(`../assets/geology-${thisPlanet.name.toLowerCase()}.png`).default} ref={imgRef3} className="secondary-img" id="geology-img" alt="img of planet's structure"/>
          </div>
          <img src={require(`../assets/planet-${thisPlanet.name.toLowerCase()}-internal.svg`).default} ref={imgRef2} className="secondary-img" alt="img of planet's structure"/>
          
        </div>
        
        <div className="planet-info">
        <div className="planet-info-main">
          <h1>{thisPlanet.name.toUpperCase()}</h1>
          <div className="wiki-p">
           <p ref={pRef1} className="main-img">{thisPlanet.overview.content}</p>
           <p ref={pRef2} className="secondary-img">{thisPlanet.structure.content}</p>
           <p ref={pRef3} className="secondary-img">{thisPlanet.geology.content}</p>
          </div>
          <div className="source-info">
            <p>Source:</p>
            <a href={thisPlanet.overview.source}>Wikipedia</a>
            <img src={require(`../assets/icon-source.svg`).default}/> 
          </div>
        </div>

        <div className="planet-buttons">
          <div className="interactive-btn active" ref={divRef1}
               onClick={() => loadImage("main")}>
            <p className="num">01</p>
            <p>overview</p>  
          </div>
          <div className="interactive-btn" ref={divRef2}
               onClick={() => loadImage("internal")}>
            <p className="num">02</p>
            <p>internal structure</p>  
          </div>
          <div className="interactive-btn" ref={divRef3}
               onClick={() => loadImage("geology")}>
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