import { useContext } from 'react'
import './Profile.css'
import { Navigate } from 'react-router-dom';
import { ContextoGlobal } from '../../context/Context.jsx';
import { useNavigate } from 'react-router-dom';


const Profile = () => {

  const { logout, user } = useContext(ContextoGlobal);
  const navigate = useNavigate();


  const handleLogout = () => {
    logout();
    navigate('/login');
  }
  return (
    <div className="profileContainer">
        <h2 className="profileH2">
            {user ? (<p>Email: {user.email}</p>) : (<p>Please login to view your profile.</p>)}
        </h2>
        <button className='profileButton' onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  )
}

export default Profile