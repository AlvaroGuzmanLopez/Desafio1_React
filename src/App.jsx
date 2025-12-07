import './App.css'
import Navbar from './components/navBar/navBar.jsx'
import Home from './components/home/home.jsx'
import RegisterPage from './components/RegisterPage/RegisterPage.jsx'
import LoginPage from './components/LoginPage/LoginPage.jsx'
import Footer from './components/footer/footer.jsx'



function App() {
  

  return (
    <>
      <Navbar></Navbar> 
      {/*<Home></Home>*/}
      {/*<RegisterPage></RegisterPage>*/}
      <LoginPage></LoginPage>
      <Footer></Footer> 
    </>
  )
}

export default App
