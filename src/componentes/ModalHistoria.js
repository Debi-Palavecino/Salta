import {useState} from "react"
const ModalHistoria = ({handleCerrarModal}) => {

    const [cerrarModal,setCerrarModal]=useState(true)

  return (
    <div className="ConteinerModal">
      <div className="contenedor-de-historia">
        <h2> Historia de Salta</h2>
        <p>
          Salta fue fundada el 16 de Abril de 1582, por Hernando de Lerma,
          gobernador de Tucuman. Originalmente la ciudad recibio el nombre de:
          Muy Noble y Leal Ciudad de San Felipe de Lerma en el Valle de Salta,
          este nombre fue cambiado inmediatamente despues de la muerte del
          fundador de la ciudad, debido a la advercion que le tenian los
          primeros pobladores, que la rebautizaron como San Felipe de Salta.
          Luego, con el tiempo, el nombre se fue transformando en el actual:
          «SALTA». Varias etimologias aymaras conforman el vocabolo Salta:
          «salla», peñas y «ta», lugar, por lo que el nombre significaria «lugar
          de peñas»; «sayta», pascana, es decir, paraje de descanso en un viaje;
          y «sagta, sagta», muy hermoso. Por eso es que se la conoce como «Salta
          la Linda». Durante los primeros años de la colonia, Salta era paso
          obligado en el camino al Alto Peru. Esto favorecio su rapido
          crecimiento. En sus alrededores se producian maiz, frutas, hortalizas,
          alimentos para el ganado, ruedas, telas y utensilios domesticos. La
          plaza mayor era el centro de la ciudad colonial. En la actualidad,
          convertida en plaza 9 de Julio, no ha perdido su importancia. Los
          patronos de la ciudad de Salta son el Señor y la Virgen del Milagro,
          que se recuerdan los 15 de septiembre con una procesion.
        </p>
      </div>
      <div className="buttonContainer">
        <button onClick={handleCerrarModal}>Cerrar</button>
      </div>
    </div>
  );
};
export default ModalHistoria;
