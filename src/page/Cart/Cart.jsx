import {pizzaCart} from '../../utils/pizzas.js'
import { useContext, useState } from "react"
import { formatPrice } from '../../utils/format.js';
import { ContextoGlobal } from '../../context/Context.jsx';
import './Cart.css'

function Cart() {
    const { cartData, setCartData, incrementarCantidad, decrementarCantidad, calculaTotal, token, user } = useContext(ContextoGlobal);
    

    const total = calculaTotal();

    const handleSubmit = async (e) => {
      e.preventDefault();

    
    const tokenLocal = localStorage.getItem("token");

    if (!tokenLocal) {
      alert("Debes estar logueado para realizar la compra");
      return;
   }


      const response = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          cart: cartData,
          total: total,
        }),
      });

      const data = await response.json();
      alert(data?.error || `"Gracias ${user.email || "usuario"}! Payment successful!`);

      setCartData([]);
      
  };


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
        <button className={token ? 'boton-cart' : 'boton-cart-disabled'} onClick={handleSubmit} type='submit' >Pagar</button>

    </div>
  )
}

export default Cart