import './Card.css'
import { formatPrice } from '../../utils/format';

const Card = (props) => {
  return (
    <div>
        <div className="card">
          <div>
              <img src={props.img} alt="" />
          </div>
          <div className='titulo1'>
            <h2>Pizza {props.name}</h2>
          </div>
          <hr/>
          <h3 className='titulo2'>Ingredientes</h3>

          <ul>
            {props.ingredientes.map((ingrediente, index) => (
              <li key={index} className='ingredientes'>🍕 {ingrediente}</li>
            ))}         
          
          </ul>

          <hr/>
          <strong className='precio1'>Precio: ${formatPrice(props.price)}</strong>
          <div className='boton'>
            <button className='primero'>Ver Más </button>
            <button className='segundo'>Añadir 🛒</button>
          </div>
        </div>
    </div>
  )
}

export default Card