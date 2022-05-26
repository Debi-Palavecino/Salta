import '../styles/modalPlaces.css'
const ModalPlaces = ({titulo,fondo})=>{
    return(
        <div  className="modalPlaces-Contenedor">
            <h1>{titulo}</h1>
            <div className='contenedorDeImagen'>
                <img alt='imagen' src={fondo}/>
            </div>
        </div>
    )
}
export default ModalPlaces