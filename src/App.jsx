import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import '../public/styles/App.css'

import Navbar from './components/Navbar'
import Home from './pages/Homepage'
import Login from './pages/Loginpage'
import Register from './pages/Registerpage'
import Genre from './pages/Genrepage'
import Book from './pages/Bookpage'
import Account from './pages/Accountpage'
import Aboutus from './pages/Aboutuspage'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/genre" element={<Genre />} />
        <Route path="/book" element={<Book />} />
        <Route path="/account" element={<Account />} />
        <Route path="/aboutus" element={<Aboutus />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
