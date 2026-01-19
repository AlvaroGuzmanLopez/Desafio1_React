import Card from "../../components/Card/Card.jsx"
import Header from "../../components/Header/Header.jsx"
import './home.css'
import {pizzas} from '../../utils/pizzas.js'
import { useEffect, useState } from "react"


const Home = () => {
  const [pizzaData, setPizzaData] = useState([]);

  useEffect(() => {
    consumirApi();
  }, []);

  const consumirApi = async () => {    
      const response = await fetch('http://localhost:5000/api/pizzas');
      const data = await response.json();
      setPizzaData(data);
  }


  return (
    <div>
        <Header></Header>
        <div className="card-container">
          {
            pizzaData.map((pizzaData) =>{
              return (
                  <Card
                  key={pizzaData.id}
                  name={pizzaData.name}
                  price={pizzaData.price}               
                  ingredientes={pizzaData.ingredients}
                  img={pizzaData.img}>
                  </Card>
              )
            })
          }
        </div>
    </div>
  )
}

export default Home