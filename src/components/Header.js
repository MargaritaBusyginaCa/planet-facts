import React from "react"
import {Link, Routes, Route} from 'react-router-dom'
import PlanetComponent from "./PlanetComponent"
import '../styles/header.css'
function Header(){
  return(
      <div>
          <nav>
              <div>
               <Link to="/Mercury" className="nav-logo">The Planets</Link>
              </div>
               <div className="nav-elements">
                 <Link to="/Mercury" className="nav-el">Mercury</Link>
                 <Link to="/Earth" className="nav-el">Earth</Link>
                 <Link to="/Venus" className="nav-el">Venus</Link>
                 <Link to="/Mars" className="nav-el">Mars</Link>
                 <Link to="/Jupiter" className="nav-el">Jupiter</Link>
                 <Link to="/Saturn" className="nav-el">Saturn</Link>
                 <Link to="/Uranus" className="nav-el">Uranus</Link>
                 <Link to="/Neptune" className="nav-el">Neptune</Link>
                </div> 
            </nav>

            <Routes>
                {/* <Route path="/" element={<PlanetComponent />}></Route> */}
                <Route path="/:planetName" element={<PlanetComponent />}></Route>
            </Routes>
      </div>
  )
}
export default Header