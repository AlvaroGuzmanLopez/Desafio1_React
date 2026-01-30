import {pizzaCart} from '../../utils/pizzas.js'
import { useContext, useState } from "react"
import { formatPrice } from '../../utils/format.js';
import { ContextoGlobal } from '../../context/Context.jsx';
import './Cart.css'

function Cart() {
    const { cartData, incrementarCantidad, decrementarCantidad, calculaTotal, token } = useContext(ContextoGlobal);
    

    const total = calculaTotal();

  return (
    <div className='cart-container'>
        <h2 className='h2-cart'>Detalle del pedido:</h2>     
          
            <ul className='ul-cart'>
            {
                cartData.map((item) => {
                  return (
                    <li key={item.id} className='li-cart'>
                        <img src={item.img} alt="" className='img-cart'/>
                        <p className='largo'>{item.name}</p>
                        <p>${formatPrice(item.price)}</p>
                        <button className='menos' onClick={() => decrementarCantidad(item.id)}>-</button>
                        <p>{item.cantidad}</p>
                        <button className='mas' onClick={() => incrementarCantidad(item.id)}>+</button>                       
                    </li>
                  )
                })
              }
            </ul>
   
        <p className='p-cart'>Total: ${formatPrice(total)}</p>
        <button className={token ? 'boton-cart' : 'boton-cart-disabled'}>Pagar</button>

    </div>
  )
}

export default Cart