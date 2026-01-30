import './Pizza.css'
import { formatPrice } from '../../utils/format';
import { useContext, useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import { ContextoGlobal } from '../../context/Context.jsx';


const Pizza = () => {

const { id } = useParams();
const { pizzaData, agregarAlCarrito } = useContext(ContextoGlobal);

// Encontrar la pizza específica por ID
const pizza = pizzaData.find(p => p.id === id);

// Si no se encuentra la pizza, mostrar un mensaje
if (!pizza) {
  return <div>Pizza no encontrada</div>;
}

  return (
    <div className='pizza-page'>
        <div className='titulo-pizza'>
            <h2>Pizza {pizza.name}</h2>
        </div>  
        
        <div className='container-pizza'>
            <div className="card-pizza">                   
                <div>
                    <img src={pizza.img} alt="" />
                </div>                              
            </div>
            <div className='card-pizza'>
                <p className='desc-pizza'>{pizza.desc}</p>
                <hr/>
                <h3 className='titulo2-pizza'>Ingredientes</h3>

                <ul>
                    {pizza.ingredients?.map((ingrediente, index) => (
                    <li key={index} className='ingredientes-pizza'>🍕 {ingrediente}</li>
                    ))}
                </ul>
                <hr/>   
            </div>
            <div className='card1-pizza'>
                <strong className='precio1-pizza'>Precio: ${formatPrice(pizza.price)}</strong>
                <div className='boton-pizza'>
                    <button className='segundo-pizza' onClick={() => agregarAlCarrito(pizza)}>Añadir 🛒</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pizza