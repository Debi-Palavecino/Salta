
import "../styles/styleContainer.css"
const ContainerImage = ({imagen})=>{
  return(
      <div>
        <div className="containerImage">
          <img src={imagen} alt="lugares"/>
        </div>
        
      </div>
  )
}
export default ContainerImage