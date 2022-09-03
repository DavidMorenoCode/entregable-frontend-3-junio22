
import { useState } from "react"



// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

export default function Item({key,titulo, descripcion, cantidad, agregarAlCarrito}) {

  const [cantidadProducto, setcantidadProducto] = useState(cantidad)
  const valDescontar = 1;
  const  descontarCantidad   = () =>{
    setcantidadProducto(cantidadProducto - valDescontar)
  }
  const spanAgotado = <span>agotado</span>
  const spanCantidad = <span>{cantidadProducto}</span>

  const buttonAgotado = <button disabled> Sin Stock</button>
  const buttonCantidad = <button onClick={() => {descontarCantidad(); agregarAlCarrito();}}> Comprar</button>

  return (
    <div className='producto' key={key}>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <h5>En stock: {(cantidadProducto <= 0) ? spanAgotado : spanCantidad}</h5>
      {( cantidadProducto <= 0 ) ? buttonAgotado : buttonCantidad}
    </div>
  )
}
