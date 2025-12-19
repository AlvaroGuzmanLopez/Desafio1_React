import { formatPrice } from '../../utils/format';
import './Navbar.css'


const Navbar = () => {
    const total = 25000;
    const token = false;

    return (
        <div className="navbar">
            
        
            <p className='p-navbar'>Pizzería Mamma Mia!</p>
            <button className='boton-navbar'>🍕 Home</button>

            {token ? (
                <>
                <button className='boton-navbar'>🔓 Profile</button>
                <button className='boton-navbar'>🔒 Logout</button>
                </>
            ) : (
                <>
                <button className='boton-navbar'>🔐 Login</button>
                <button className='boton-navbar'>🔐 Register</button>
                </>
            )}

            <button className='precio'>🛒 Total: ${formatPrice(total)}</button>

        </div>
    )
}

export default Navbar