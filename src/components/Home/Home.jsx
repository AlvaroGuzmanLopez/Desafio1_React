import Card from "../Card/Card"
import Header from "../Header/Header"
import './home.css'
import {pizzas} from '../../utils/pizzas.js'
import { useState } from "react"


const Home = () => {
  const [pizzaData, setPizzaData] = useState(pizzas);
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