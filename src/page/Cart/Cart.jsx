import {pizzaCart} from '../../utils/pizzas.js'
import { useState } from "react"
import { formatPrice } from '../../utils/format.js';
import './Cart.css'

function Cart() {
    const [cartData, setCartData] = useState(pizzaCart);

    // ==========================================================
    // FUNCIONES DE MANEJO DE CANTIDAD
    // ==========================================================
    
    /**
     * Incrementa o decrementa la cantidad de un artículo. 
     * Si la cantidad llega a 0, el artículo se elimina del carrito.
     * @param {number} id - El ID de la pizza a modificar.
     * @param {number} change - El cambio de cantidad (1 para más, -1 para menos).
     */
    const handlemasmenos = (id, change) => {
        setCartData(prevCartData => {
            // Mapeamos el carrito actual para crear una nueva versión
            const newCartData = prevCartData.map(item => {
                // Si no es el item que buscamos, lo retornamos sin cambios
                if (item.id !== id) {
                    return item;
                }
                
                // Calculamos la nueva cantidad
                const newCount = item.count + change;
                
                // Si la nueva cantidad es 0 o menos, retornamos null para filtrarlo
                if (newCount <= 0) {
                    return null;
                }
                
                // Si es válida, retornamos el item actualizado
                return { ...item, count: newCount };
            });

            // Filtramos los elementos que son null (los que tienen count <= 0)
            return newCartData.filter(item => item !== null);
        });
    };

    // ==========================================================
    // FUNCIONES DE CÁLCULO
    // ==========================================================
    
    /**
     * Calcula el total del pedido sumando (precio * cantidad) de cada item.
     */
    const calculaTotal = () => {
        return cartData.reduce((total, item) => {
            // Aseguramos que price y count sean números antes de multiplicar
            const subtotal = (item.price || 0) * (item.count || 0); 
            return total + subtotal;
        }, 0);
    };

    // Calculamos el total cada vez que el componente se renderiza (cuando cartData cambia)
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
                        <button className='menos' onClick={() => handlemasmenos(item.id, -1)}>-</button>
                        <p>{item.count}</p>
                        <button className='mas' onClick={() => handlemasmenos(item.id, 1)}>+</button>                       
                    </li>
                  )
                })
              }
            </ul>
   
        <p className='p-cart'>Total: ${formatPrice(total)}</p>
        <button className='boton-cart'>Pagar</button>

    </div>
  )
}

export default Cart