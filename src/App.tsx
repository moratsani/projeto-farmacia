import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import NavBar from './components/navBar/NavBar'
import Home from './components/paginas/home/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className='min-h-[90vh]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App