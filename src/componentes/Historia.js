import ModalHistoria from "./ModalHistoria"
import React from "react"
import { useState } from "react"
const Historia = ()=>{
    const [abrirModal,setAbrirModal]=useState(false)
    
    const handleClickAbrirModal=()=>{
        setAbrirModal(true)
    }
    const handleCerrarModal =()=>{
        setAbrirModal(false)
    }
    return(
        <div className="">
            <ModalHistoria handleCerrarModal={handleCerrarModal}/>
        </div>
    )
}
export default Historia