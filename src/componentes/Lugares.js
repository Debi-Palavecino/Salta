import '../styles/stylesLugares.css'
import ModalPlaces from './ModalPlaces'
//import { useState } from 'react'
import places from '../auxiliares/placesToMeet'
const Lugares =()=>{

    
    return(
        <article className="card">
               <div>
                   <div><h1>Places To Meet...</h1></div>
                   <div>
                       {places.map(element=>{
                           return(
                            <ModalPlaces key={element.id} titulo={element.nombre} fondo={element.imagen} />
                           )
                       })}
                   </div>
               </div>
        </article>
    )
}
export default Lugares