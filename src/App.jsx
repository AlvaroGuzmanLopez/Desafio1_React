import './App.css'
import Navbar from './components/navBar/navBar.jsx'
import Home from './page/Home/Home.jsx'
import Pizza from './page/Pizza/Pizza.jsx'
import RegisterPage from './page/RegisterPage/RegisterPage.jsx'
import LoginPage from './page/LoginPage/LoginPage.jsx'
import Footer from './components/footer/footer.jsx'
import { Routes, Route, Navigate } from 'react-router-dom'
import Cart from './page/Cart/Cart.jsx'
import Profile from './page/Profile/Profile.jsx'
import NotFound from './page/NotFound/NotFound.jsx'
import { useContext } from 'react'
import { ContextoGlobal } from './context/Context.jsx'



function App() {
  
  const { token } = useContext(ContextoGlobal);

  return (
    <>
      <Navbar></Navbar>
      <Routes> 
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/register' element={!token ? <RegisterPage /> : <Navigate to="/" />}></Route>
        <Route path='/login' element={!token ? <LoginPage /> : <Navigate to="/" />}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/pizza/:id' element={<Pizza></Pizza>}></Route>
        <Route path='/profile' element={token ? <Profile /> : <Navigate to="/login" />}></Route>
        <Route path='/404' element={<NotFound></NotFound>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer> 
    </>
  )
}

export default App
