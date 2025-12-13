import { useState } from 'react'
import './LoginPage.css'

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlechange = (e) => {
        if (e.target.name === 'email') {
            setEmail(e.target.value);
        } else if (e.target.name === 'password') {
            setPassword(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.length < 5) {
            alert('El email debe tener al menos 5 caracteres');
            return;
        }        
        const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/;
        if (!emailPattern.test(email)) {
            alert('El email debe tener el formato: usuario@dominio.com');
            return;
        }
        if (password.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres');
            return;
        }

        //const mail = "prueba@prueba.com"
        //const pass = "123456"

        //if (email !== mail || password !== pass) {
        //    alert('Email o contraseña incorrectos');
        //    return;
        //}
        
        alert('Login exitoso');

        setEmail('');
        setPassword('');

    }


  return (
    <div className='formulario-login'>
      <h1>Login</h1>
        <p>E-Mail*</p>
        <input type="text" required minLength="5" name="email" onChange={handlechange} placeholder="Ingrese su E-Mail" value={email}></input>
        <p>Password*</p>
        <input type="password" required minLength="6" name="password" onChange={handlechange} placeholder="Ingrese su password" value={password}></input>
        <button type='button' onClick={handleSubmit}>Enviar</button>
    </div>
  )
}

export default LoginPage