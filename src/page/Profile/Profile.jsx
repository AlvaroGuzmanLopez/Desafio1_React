import { useContext } from 'react'
import './Profile.css'
import { Navigate } from 'react-router-dom';
import { ContextoGlobal } from '../../context/Context.jsx';

const Profile = () => {

  const { logout } = useContext(ContextoGlobal);

  const handleLogout = () => {
    logout();
    Navigate('/login');
  }
  return (
    <div className="profileContainer">
        <h2 className="profileH2">guzmanlopezalvaro@gmail.com</h2>
        <button className='profileButton' onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  )
}

export default Profile