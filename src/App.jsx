import './App.css'
import Navbar from './components/navBar/navBar.jsx'
import Home from './page/Home/Home.jsx'
import Pizza from './page/Pizza/Pizza.jsx'
import RegisterPage from './page/RegisterPage/RegisterPage.jsx'
import LoginPage from './page/LoginPage/LoginPage.jsx'
import Footer from './components/footer/footer.jsx'
import { Routes, Route } from 'react-router-dom'
import Cart from './page/Cart/Cart.jsx'
import Profile from './page/Profile/Profile.jsx'
import NotFound from './page/NotFound/NotFound.jsx'



function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Routes> 
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/pizza/p001' element={<Pizza></Pizza>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
        <Route path='/404' element={<NotFound></NotFound>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer> 
    </>
  )
}

export default App
