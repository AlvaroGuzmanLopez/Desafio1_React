import { createContext, useEffect, useState } from "react";

export const ContextoGlobal = createContext({});



const ContextoGlobalProvider = ({ children }) => {

    const [pizzaData, setPizzaData] = useState([]);
    const [cartData, setCartData] = useState([]);
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    
    
    useEffect(() => {
        consumirApi();
        
      }, []);
    
      const consumirApi = async () => {    
          const response = await fetch('http://localhost:5000/api/pizzas');
          const data = await response.json();
          setPizzaData(data);
      }

      const apiLogin = async (email, password) => {
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            email,
            password,
            }),
            });
            const data = await response.json();
            alert(data?.error || "Authentication successful!");
           

            if (response.ok) {
                localStorage.setItem("token", data.token);
                setToken(true);
                
                await apiMe(); 

            } else {
                alert(data.error);
            }
      };

      const apiRegister = async (email, password) => {
        const response = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            email,
            password,
            }),
            });
            const data1 = await response.json();
            alert(data1?.error || "Authentication successful!");
          
            if (response.ok) {
                localStorage.setItem("token", data.token);
                setToken(true);
                
                await apiMe(); 

            } else {
                alert(data.error);
            }

      };

      const apiMe = () => {
        const token = localStorage.getItem("token");

        if (token) {
             fetch("http://localhost:5000/api/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => response.json())
        .then((data2) => setUser(data2));
        }
      };

      const agregarAlCarrito = (pizza) => {
        setCartData(prevCartData => {
            
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
        alert(`La pizza ${pizza.name} ha sido añadida al carrito.`);
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
                        return null; 
                    }
                    return { ...item, cantidad: newCantidad };
                }
                return item;
            }).filter(item => item !== null); 
            return newCart;
        });
      };

      const calculaTotal = () => {
        return cartData.reduce((total, item) => {
            return total + (item.price || 0) * (item.cantidad || 0);
        }, 0);
      };
      
      const logout = () => {
        setToken(false);
        setUser(null);
        localStorage.removeItem("token");
      }

    return (
        <ContextoGlobal.Provider value = {{pizzaData, cartData, setCartData, agregarAlCarrito, incrementarCantidad, decrementarCantidad, calculaTotal, token, setToken, logout, 
        apiLogin, apiRegister, apiMe, user, setUser}}>
            {children}
        </ContextoGlobal.Provider>
    );
};

export default ContextoGlobalProvider;