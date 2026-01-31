import { useContext, useState } from 'react'
import './LoginPage.css'
import { ContextoGlobal } from '../../context/Context.jsx'

const LoginPage = () => {

    const { apiLogin } = useContext(ContextoGlobal);
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    let ok = true;

    const handlechange = (e) => {
        if (e.target.name === 'email') {
            setUserEmail(e.target.value);
        } else if (e.target.name === 'password') {
            setUserPassword(e.target.value);
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        
        
        if (!userEmail.trim()) {
            alert('Por favor ingrese su email');
            ok = false
            return;
        }
        if (userEmail.length < 5) {
            alert('El email debe tener al menos 5 caracteres');
            ok = false;
            return;
        }        
        const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/;
        if (!emailPattern.test(userEmail)) {
            alert('El email debe tener el formato: usuario@dominio.com');
            ok = false;
            return;
        }
        if (!userPassword.trim()) {
            alert('Por favor ingrese su contraseña');
            ok = false;
            return;
        }
        if (userPassword.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres');
            ok = false;
            return;
        }

        if (ok === true) {
        
        await apiLogin(userEmail, userPassword);
        setUserEmail('');
        setUserPassword('');

        }
    }


  return (
    <div className='formulario-login'>
      <h1>Login</h1>
        <p>E-Mail*</p>
        <input type="text" required minLength="5" name="email" onChange={handlechange} placeholder="Ingrese su E-Mail" value={userEmail}></input>
        <p>Password*</p>
        <input type="password" required minLength="6" name="password" onChange={handlechange} placeholder="Ingrese su password" value={userPassword}></input>
        <button type='submit' onClick={handleSubmit}>Enviar</button>
    </div>
  )
}

export default LoginPage