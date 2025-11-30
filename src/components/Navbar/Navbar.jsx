import { formatPrice } from '../../utils/format';
import './Navbar.css'


const Navbar = () => {
    const total = 25000;
    const token = false;

    return (
        <div className="navbar">
            
        
            <p>Pizzería Mamma Mia!</p>
            <button>🍕 Home</button>

            {token ? (
                <>
                <button>🔓 Profile</button>
                <button>🔒 Logout</button>
                </>
            ) : (
                <>
                <button>🔐 Login</button>
                <button>🔐 Register</button>
                </>
            )}

            <butoon className='precio'>🛒 Total: ${formatPrice(total)}</butoon>

        </div>
    )
}

export default Navbar