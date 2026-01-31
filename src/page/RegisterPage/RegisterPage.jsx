import { useState } from 'react'
import './RegisterPage.css'
import { useContext } from 'react'
import { ContextoGlobal } from '../../context/Context.jsx'

const RegisterPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const {apiRegister} = useContext(ContextoGlobal);

    let ok = true;

    const handlechange = (e) => {
        if (e.target.name === 'email') {
            setEmail(e.target.value);
        } else if (e.target.name === 'password') {
            setPassword(e.target.value);
        } else if (e.target.name === 'confirmPassword') {
            setConfirmPassword(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.length < 5) {
            alert('El email debe tener al menos 5 caracteres');
            ok = false
            return;
        }        
        const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/;
        if (!emailPattern.test(email)) {
            alert('El email debe tener el formato: usuario@dominio.com');
            ok=false
            return;
        }
        if (password.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres');
            ok=false
            return;
        }
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            ok=false
            return;
        }

        if (ok === true) {

        apiRegister(email, password);

        setEmail('');
        setPassword('');
        setConfirmPassword('');

        }


    }

  return (
    <div className="formulario-register">
        <h1>Register</h1>
        <p>E-Mail*</p>
        <input type="text" required minLength="5" name="email" onChange={handlechange} placeholder="Ingrese su E-Mail" value={email}></input>
        <p>Password*</p>
        <input type="password" required minLength="6" name="password" onChange={handlechange} placeholder="Ingrese su password" value={password}></input>
        <p>Confirmar Password*</p>
        <input type="password" required minLength="6" name='confirmPassword' onChange={handlechange} placeholder="Confirme su password" value={confirmPassword}></input>
        <button type='button' onClick={handleSubmit}>Enviar</button>
    </div>
  )
}

export default RegisterPage