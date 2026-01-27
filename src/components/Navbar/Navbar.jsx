import { useContext } from 'react';
import { formatPrice } from '../../utils/format';
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import { ContextoGlobal } from '../../context/Context.jsx';


const Navbar = () => {
    
    const {token, logout} = useContext(ContextoGlobal);

    const {calculaTotal} = useContext(ContextoGlobal);
    const total = calculaTotal();

    const estiloActivo = ({ isActive }) => (
        isActive ? 'boton-navbar-activo' : 'boton-navbar'
    );

    return (
        <div className="navbar">
            
        
            <p className='p-navbar'>Pizzería Mamma Mia!</p>
            <NavLink to="/" className={estiloActivo}>🍕 Home </NavLink>

            {token ? (
                <>
                <NavLink to="/profile" className={estiloActivo}>🔓 Profile</NavLink>
                <NavLink to="/" className= "boton-navbar" onClick={logout}>🔒 Logout</NavLink>
                </>
            ) : (
                <>
                
                <NavLink to="/register" className={estiloActivo}>🔐 Register</NavLink>
                <NavLink to="/login" className={estiloActivo}>🔐 Login</NavLink>    
                
                </>
            )}

            <NavLink to="/cart" className={({ isActive }) => (isActive ? 'precionb-activo' : 'precionb')}>🛒 Total: ${formatPrice(total)}</NavLink>
        </div>
    )
}

export default Navbar