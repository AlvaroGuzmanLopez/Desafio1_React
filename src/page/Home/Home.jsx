import Card from "../../components/Card/Card.jsx"
import Header from "../../components/Header/Header.jsx"
import './home.css'
import { useContext, useEffect, useState } from "react"
import { ContextoGlobal } from '../../context/Context.jsx'


const Home = () => {
  
  const { pizzaData } = useContext(ContextoGlobal);

  return (
    <div>
        <Header></Header>
        <div className="card-container">
          {
            pizzaData.map((pizzaData) =>{
              return (
                  <Card
                  key={pizzaData.id}
                  id={pizzaData.id}
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