import './Pizza.css'
import { formatPrice } from '../../utils/format';
import { useEffect, useState } from "react"


const Pizza = () => {

const [pizzaData, setPizzaData] = useState([]);

  useEffect(() => {
    consumirApi();
  }, []);

  const consumirApi = async () => {    
      const response = await fetch('http://localhost:5000/api/pizzas/p001');
      const data = await response.json();
      setPizzaData(data);
      
  }



  return (
    <div className='pizza-page'>
        <div className='titulo-pizza'>
            <h2>Pizza {pizzaData.name}</h2>
        </div>  
        
        <div className='container-pizza'>
            <div className="card-pizza">                   
                <div>
                    <img src={pizzaData.img} alt="" />
                </div>                              
            </div>
            <div className='card-pizza'>
                <p className='desc-pizza'>{pizzaData.desc}</p>
                <hr/>
                <h3 className='titulo2-pizza'>Ingredientes</h3>

                <ul>
                    {pizzaData.ingredients?.map((ingrediente, index) => (
                    <li key={index} className='ingredientes-pizza'>🍕 {ingrediente}</li>
                    ))}
                </ul>
                <hr/>   
            </div>
            <div className='card1-pizza'>
                <strong className='precio1-pizza'>Precio: ${formatPrice(pizzaData.price)}</strong>
                <div className='boton-pizza'>
                    <button className='segundo-pizza'>Añadir 🛒</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pizza