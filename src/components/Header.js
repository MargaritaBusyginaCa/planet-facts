import React, {useState, useEffect} from "react"
import {Link, Routes, Route, Navigate} from 'react-router-dom'
import PlanetComponent from "./PlanetComponent"
import '../styles/header.css'
import '../index.css'

function Header(){
  const [showMenu, setShowMenu] = useState(false)
  let styleName = showMenu ? "nav-elements" : "hide"
  let headerStyle = showMenu ? "fixed-header" : ""
  return(
      <div className="main-header-container">
          <nav className={headerStyle}> 
             <div className="logo-menu">
              <div>
               <Link to="/Mercury" className="nav-logo" onClick={() => setShowMenu(true)}>The Planets</Link>
               </div>
               <img src={require("../assets/icon-hamburger.svg").default} className="menu-icon" onClick={() => setShowMenu(!showMenu)}/>
              </div>

               <div className={styleName}>
                <div className="nav-group-el">
                   <div className="planet-circle" id="mercury"></div>
                   <Link to="/Mercury" className="nav-el" onClick={() => setShowMenu(false)}>Mercury</Link>
                </div>
                <div className="nav-group-el">
                   <div className="planet-circle" id="earth"></div>
                   <Link to="/Earth" className="nav-el" onClick={() => setShowMenu(false)}>Earth</Link>
                </div>
                <div className="nav-group-el">
                   <div className="planet-circle" id="venus"></div>
                   <Link to="/Venus" className="nav-el" onClick={() => setShowMenu(false)}>Venus</Link>
                </div>
                <div className="nav-group-el">
                   <div className="planet-circle" id="mars"></div>
                   <Link to="/Mars" className="nav-el" onClick={() => setShowMenu(false)}>Mars</Link>
                </div>
                <div className="nav-group-el">
                   <div className="planet-circle" id="jupiter"></div>
                   <Link to="/Jupiter" className="nav-el" onClick={() => setShowMenu(false)}>Jupiter</Link>
                </div>
                <div className="nav-group-el">
                    <div className="planet-circle" id="saturn"></div>
                    <Link to="/Saturn" className="nav-el" onClick={() => setShowMenu(false)}>Saturn</Link>
                </div>
                <div className="nav-group-el">
                    <div className="planet-circle" id="uranus"></div>
                    <Link to="/Uranus" className="nav-el" onClick={() => setShowMenu(false)}>Uranus</Link>
                </div>
                <div className="nav-group-el">
                   <div className="planet-circle" id="neptune"></div>
                   <Link to="/Neptune" className="nav-el" onClick={() => setShowMenu(false)}>Neptune</Link>
                </div>
                </div> 
            </nav>

            <Routes>
                <Route exact path="/" element={<Navigate replace to="/Mercury" />} />
                <Route path="/:planetName" element={<PlanetComponent />}></Route>
            </Routes>
      </div>
  )
}
export default Header