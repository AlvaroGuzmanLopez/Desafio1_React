import { formatPrice } from '../../utils/format';
import './Navbar.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
    const total = 25000;
    const token = false;

    return (
        <div className="navbar">
            
        
            <p className='p-navbar'>Pizzería Mamma Mia!</p>
            <Link to="/"><button className='boton-navbar'>🍕 Home</button></Link>

            {token ? (
                <>
                
                <button className='boton-navbar'>🔒 Logout</button>
                </>
            ) : (
                <>
                
                <Link to="/register"><button className='boton-navbar'>🔐 Register</button></Link>
                <Link to="/login"><button className='boton-navbar'>🔐 Login</button></Link>
                <Link to="/profile"><button className='boton-navbar'>🔓 Profile</button></Link>
                </>
            )}

            <Link className="cart-link" to="/cart"><button className='precionb'>🛒 Total: ${formatPrice(total)}</button></Link>

        </div>
    )
}

export default Navbar