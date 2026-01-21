import { createContext, useEffect, useState } from "react";

export const ContextoGlobal = createContext({});



const ContextoGlobalProvider = ({ children }) => {

    const [pizzaData, setPizzaData] = useState([]);
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        consumirApi();
      }, []);
    
      const consumirApi = async () => {    
          const response = await fetch('http://localhost:5000/api/pizzas');
          const data = await response.json();
          setPizzaData(data);
      }

      const agregarAlCarrito = (pizza) => {
        setCartData(prevCartData => {
            // Verificamos si la pizza ya está en el carrito
            const pizzaEnCarrito = prevCartData.find(item => item.id === pizza.id);
            if (pizzaEnCarrito) {
                const newCart = prevCartData.map(item =>
                    item.id === pizza.id ? { ...item, cantidad: item.cantidad + 1 } : item
                );
                return newCart;
            } else {
                const newCart = [...prevCartData, { ...pizza, cantidad: 1 }];
                return newCart;
            }
        });
        };
        
      const incrementarCantidad = (id) => {
        setCartData(prevCartData =>
            prevCartData.map(item =>
                item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
            )
        );
      };

      const decrementarCantidad = (id) => {
        setCartData(prevCartData => {
            const newCart = prevCartData.map(item => {
                if (item.id === id) {
                    const newCantidad = item.cantidad - 1;
                    if (newCantidad <= 0) {
                        return null; // Marcar para eliminar
                    }
                    return { ...item, cantidad: newCantidad };
                }
                return item;
            }).filter(item => item !== null); // Filtrar eliminados
            return newCart;
        });
      };

      const calculaTotal = () => {
        return cartData.reduce((total, item) => {
            return total + (item.price || 0) * (item.cantidad || 0);
        }, 0);
      };      

    return (
        <ContextoGlobal.Provider value = {{pizzaData, cartData, agregarAlCarrito, incrementarCantidad, decrementarCantidad, calculaTotal}}>
            {children}
        </ContextoGlobal.Provider>
    );
};

export default ContextoGlobalProvider;