import React from "react"
import '../index.css'
import '../styles/factbox.css'
import data from "../../data.json"
import PlanetComponent from "./PlanetComponent"
import '../styles/factbox.css'

function FactBox({title, data}){
 return(
     <div className="factbox">
         <h4 className="fact-title">{title}</h4>
         <p className="fact-data">{data}</p>
     </div>
 )

}
export default FactBox