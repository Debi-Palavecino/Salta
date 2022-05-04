
import "../styles/styleContainer.css"
const ContainerImage = ({imagen})=>{
  return(
      <div className="containerImage">
          <img src={imagen} alt="lugares"/>
      </div>
  )
}
export default ContainerImage